var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../database/prisma.service.js";
import { EvaluationStatus, UserRole } from "../../../generated/prisma/client.js";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";
const BRAND = [37, 99, 235];
const BRAND_HEX = "2563EB";
const LIGHT_BG = [241, 245, 249];
const BORDER = [226, 232, 240];
const TEXT_PRIMARY = [15, 23, 42];
const TEXT_SECONDARY = [100, 116, 139];
const WHITE = [255, 255, 255];
const STATUS_COLORS = {
    [EvaluationStatus.DRAFT]: [245, 158, 11],
    [EvaluationStatus.SUBMITTED_TO_MANAGER]: [59, 130, 246],
    [EvaluationStatus.SUBMITTED_TO_CALIBRATION]: [139, 92, 246],
    [EvaluationStatus.FINALIZED]: [16, 185, 129],
};
const STATUS_LABELS = {
    [EvaluationStatus.DRAFT]: "Draft",
    [EvaluationStatus.SUBMITTED_TO_MANAGER]: "Manager Review",
    [EvaluationStatus.SUBMITTED_TO_CALIBRATION]: "Calibration",
    [EvaluationStatus.FINALIZED]: "Finalized",
};
const PAGE_MARGIN = 50;
const HEADER_H = 70;
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboard(cycleId, user) {
        const where = {
            ...(cycleId ? { cycleId } : {}),
            ...this.buildScopeFilter(user),
        };
        const [statusCounts, totalEmployees, totalDepartments] = await Promise.all([
            this.prisma.evaluation.groupBy({
                by: ["status"],
                where,
                _count: { id: true },
            }),
            this.prisma.user.count({ where: { isActive: true, role: "EMPLOYEE" } }),
            this.prisma.department.count(),
        ]);
        const stats = { draft: 0, submittedToManager: 0, submittedToCalibration: 0, finalized: 0 };
        for (const entry of statusCounts) {
            if (entry.status === EvaluationStatus.DRAFT)
                stats.draft = entry._count.id;
            if (entry.status === EvaluationStatus.SUBMITTED_TO_MANAGER)
                stats.submittedToManager = entry._count.id;
            if (entry.status === EvaluationStatus.SUBMITTED_TO_CALIBRATION)
                stats.submittedToCalibration = entry._count.id;
            if (entry.status === EvaluationStatus.FINALIZED)
                stats.finalized = entry._count.id;
        }
        const finalizedAnswers = await this.prisma.evaluationAnswer.aggregate({
            where: { evaluation: { ...where, status: EvaluationStatus.FINALIZED }, finalScore: { not: null } },
            _avg: { selfScore: true, managerScore: true, finalScore: true },
        });
        return {
            evaluations: stats,
            totalEmployees,
            totalDepartments,
            totalPending: stats.draft + stats.submittedToManager + stats.submittedToCalibration,
            totalCompleted: stats.finalized,
            completionRate: totalEmployees > 0 ? Math.round((stats.finalized / totalEmployees) * 100) : 0,
            averages: {
                self: Number(finalizedAnswers._avg.selfScore?.toFixed(2) ?? 0),
                manager: Number(finalizedAnswers._avg.managerScore?.toFixed(2) ?? 0),
                final: Number(finalizedAnswers._avg.finalScore?.toFixed(2) ?? 0),
            },
        };
    }
    async generateCsvReport(cycleId, user) {
        await this.assertCycleExists(cycleId);
        const evaluations = await this.getEvaluationsForReport(cycleId, user);
        const header = [
            "Employee",
            "Email",
            "Department",
            "Level",
            "Status",
            "Sheet",
            "Question",
            "Weight",
            "Max Score",
            "Self Score",
            "Self Remarks",
            "Manager Score",
            "Manager Remarks",
            "Final Score",
        ];
        const rows = [];
        for (const evaluation of evaluations) {
            const name = `${evaluation.employee.firstName} ${evaluation.employee.lastName}`;
            for (const answer of evaluation.answers) {
                rows.push([
                    name,
                    evaluation.employee.email,
                    evaluation.employee.department?.name ?? "N/A",
                    evaluation.employee.level?.name ?? "N/A",
                    STATUS_LABELS[evaluation.status] ?? evaluation.status,
                    answer.question.sheet.name,
                    answer.question.text,
                    answer.question.weight.toString(),
                    answer.question.sheet.maxScore.toString(),
                    answer.selfScore?.toString() ?? "",
                    answer.selfRemarks ?? "",
                    answer.managerScore?.toString() ?? "",
                    answer.managerRemarks ?? "",
                    answer.finalScore?.toString() ?? "",
                ]);
            }
        }
        return [header, ...rows]
            .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
            .join("\n");
    }
    async generateExcelReport(cycleId, user) {
        const cycle = await this.assertCycleExists(cycleId);
        const evaluations = await this.getEvaluationsForReport(cycleId, user);
        const stats = this.computeStats(evaluations);
        const workbook = new ExcelJS.Workbook();
        workbook.creator = "Performance Evaluation System";
        workbook.created = new Date();
        this.buildSummarySheet(workbook, cycle, stats);
        this.buildDetailSheet(workbook, evaluations);
        this.buildDepartmentSheet(workbook, stats);
        const buffer = await workbook.xlsx.writeBuffer();
        return Buffer.from(buffer);
    }
    async generatePdfReport(cycleId, user) {
        const cycle = await this.assertCycleExists(cycleId);
        const evaluations = await this.getEvaluationsForReport(cycleId, user);
        const stats = this.computeStats(evaluations);
        return new Promise((resolve, reject) => {
            const doc = new PDFDocument({
                size: "A4",
                margins: { top: HEADER_H + 20, left: PAGE_MARGIN, bottom: 50, right: PAGE_MARGIN },
                bufferPages: true,
                info: {
                    Title: `Evaluation Report — ${cycle.name}`,
                    Author: "Performance Evaluation System",
                    Subject: `Cycle: ${cycle.name}`,
                },
            });
            const chunks = [];
            doc.on("data", (chunk) => chunks.push(chunk));
            doc.on("end", () => resolve(Buffer.concat(chunks)));
            doc.on("error", reject);
            const W = doc.page.width;
            const contentW = W - PAGE_MARGIN * 2;
            this.drawPdfHeader(doc, cycle, W);
            let y = HEADER_H + 30;
            doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(16);
            doc.text("Performance Evaluation Report", PAGE_MARGIN, y);
            y += 24;
            doc.fillColor(TEXT_SECONDARY).font("Helvetica").fontSize(10);
            doc.text(`Cycle: ${cycle.name}  •  ${this.fmtDate(cycle.startDate)} — ${this.fmtDate(cycle.endDate)}  •  Generated: ${this.fmtDate(new Date())}`, PAGE_MARGIN, y);
            y += 28;
            y = this.drawKpiCards(doc, y, contentW, stats);
            y += 20;
            y = this.drawScoreAverages(doc, y, contentW, stats);
            y += 20;
            if (stats.byDepartment.length > 0) {
                y = this.drawDepartmentBreakdown(doc, y, contentW, stats, W);
            }
            doc.addPage();
            this.drawPdfHeader(doc, cycle, W);
            let detailY = HEADER_H + 30;
            doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(14);
            doc.text("Detailed Evaluations", PAGE_MARGIN, detailY);
            detailY += 24;
            detailY = this.drawEvaluationTable(doc, detailY, contentW, evaluations, cycle, W);
            const totalPages = doc.bufferedPageRange().count;
            for (let i = 0; i < totalPages; i++) {
                doc.switchToPage(i);
                doc.fillColor(TEXT_SECONDARY).font("Helvetica").fontSize(8);
                doc.text(`Page ${i + 1} of ${totalPages}`, PAGE_MARGIN, doc.page.height - 30, { width: contentW, align: "right" });
                doc.text("Performance Evaluation System — Confidential", PAGE_MARGIN, doc.page.height - 30, { width: contentW, align: "left" });
            }
            doc.end();
        });
    }
    async assertCycleExists(cycleId) {
        const cycle = await this.prisma.evaluationCycle.findUnique({ where: { id: cycleId } });
        if (!cycle)
            throw new NotFoundException(`Evaluation cycle ${cycleId} not found`);
        return cycle;
    }
    async getEvaluationsForReport(cycleId, user) {
        return this.prisma.evaluation.findMany({
            where: { cycleId, ...this.buildScopeFilter(user) },
            include: {
                employee: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                        department: { select: { name: true } },
                        level: { select: { name: true } },
                    },
                },
                answers: {
                    include: {
                        question: {
                            select: {
                                text: true,
                                weight: true,
                                sheet: { select: { name: true, weight: true, minScore: true, maxScore: true } },
                            },
                        },
                    },
                    orderBy: { question: { sortOrder: "asc" } },
                },
            },
            orderBy: { employee: { lastName: "asc" } },
        });
    }
    buildScopeFilter(user) {
        if (!user || user.role === UserRole.ADMIN)
            return {};
        if (user.role === UserRole.LINE_MANAGER) {
            return { employee: { lineManagerId: user.id } };
        }
        if (user.role === UserRole.CALIBRATION) {
            return {
                cycle: { calibrationMembers: { some: { userId: user.id } } },
            };
        }
        return {};
    }
    computeStats(evaluations) {
        const byStatus = {};
        let selfSum = 0, selfCount = 0;
        let mgrSum = 0, mgrCount = 0;
        let finalSum = 0, finalCount = 0;
        let globalMaxScore = 5;
        const scoreDistribution = new Map();
        const deptMap = new Map();
        for (const evaluation of evaluations) {
            byStatus[evaluation.status] = (byStatus[evaluation.status] ?? 0) + 1;
            const deptName = evaluation.employee.department?.name ?? "Unassigned";
            const dept = deptMap.get(deptName) ?? { count: 0, finalSum: 0, finalCount: 0 };
            dept.count++;
            for (const a of evaluation.answers) {
                const maxScore = a.question.sheet.maxScore;
                if (maxScore > globalMaxScore)
                    globalMaxScore = maxScore;
                if (a.selfScore != null) {
                    selfSum += a.selfScore;
                    selfCount++;
                }
                if (a.managerScore != null) {
                    mgrSum += a.managerScore;
                    mgrCount++;
                }
                if (a.finalScore != null) {
                    finalSum += a.finalScore;
                    finalCount++;
                    dept.finalSum += a.finalScore;
                    dept.finalCount++;
                    const bucket = Math.max(1, Math.min(maxScore, a.finalScore));
                    scoreDistribution.set(bucket, (scoreDistribution.get(bucket) ?? 0) + 1);
                }
            }
            deptMap.set(deptName, dept);
        }
        const byDepartment = Array.from(deptMap.entries())
            .map(([name, d]) => ({
            name,
            count: d.count,
            avgFinal: d.finalCount > 0 ? Number((d.finalSum / d.finalCount).toFixed(2)) : 0,
        }))
            .sort((a, b) => a.name.localeCompare(b.name));
        return {
            total: evaluations.length,
            byStatus,
            avgSelfScore: selfCount > 0 ? Number((selfSum / selfCount).toFixed(2)) : 0,
            avgManagerScore: mgrCount > 0 ? Number((mgrSum / mgrCount).toFixed(2)) : 0,
            avgFinalScore: finalCount > 0 ? Number((finalSum / finalCount).toFixed(2)) : 0,
            byDepartment,
            scoreDistribution,
            globalMaxScore,
        };
    }
    drawPdfHeader(doc, cycle, pageW) {
        doc.save();
        doc.rect(0, 0, pageW, HEADER_H).fill(`#${BRAND_HEX}`);
        doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(16);
        doc.text("Performance Evaluation", PAGE_MARGIN, 18, { continued: false });
        doc.fillColor([200, 220, 255]).font("Helvetica").fontSize(10);
        doc.text(`${cycle.name}  •  ${STATUS_LABELS[cycle.status] ?? cycle.status}`, PAGE_MARGIN, 42);
        doc.restore();
    }
    drawKpiCards(doc, startY, contentW, stats) {
        const cards = [
            { label: "Total Evaluations", value: stats.total.toString(), color: BRAND },
            { label: "Draft", value: (stats.byStatus[EvaluationStatus.DRAFT] ?? 0).toString(), color: STATUS_COLORS[EvaluationStatus.DRAFT] },
            { label: "In Review", value: ((stats.byStatus[EvaluationStatus.SUBMITTED_TO_MANAGER] ?? 0) + (stats.byStatus[EvaluationStatus.SUBMITTED_TO_CALIBRATION] ?? 0)).toString(), color: STATUS_COLORS[EvaluationStatus.SUBMITTED_TO_MANAGER] },
            { label: "Finalized", value: (stats.byStatus[EvaluationStatus.FINALIZED] ?? 0).toString(), color: STATUS_COLORS[EvaluationStatus.FINALIZED] },
        ];
        const gap = 12;
        const cardW = (contentW - gap * (cards.length - 1)) / cards.length;
        const cardH = 56;
        cards.forEach((card, i) => {
            const x = PAGE_MARGIN + i * (cardW + gap);
            const y = startY;
            doc.save();
            doc.roundedRect(x, y, cardW, cardH, 6).fill(LIGHT_BG);
            doc.rect(x, y, 4, cardH).fill(card.color);
            doc.fillColor(TEXT_SECONDARY).font("Helvetica").fontSize(9);
            doc.text(card.label, x + 14, y + 10, { width: cardW - 24 });
            doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(20);
            doc.text(card.value, x + 14, y + 26, { width: cardW - 24 });
            doc.restore();
        });
        return startY + cardH;
    }
    drawScoreAverages(doc, startY, contentW, stats) {
        const maxRef = stats.globalMaxScore;
        doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(12);
        doc.text(`Score Averages (1–${maxRef})`, PAGE_MARGIN, startY);
        let y = startY + 20;
        const scores = [
            { label: "Self Assessment", value: stats.avgSelfScore, color: [59, 130, 246] },
            { label: "Manager Review", value: stats.avgManagerScore, color: [139, 92, 246] },
            { label: "Final Score", value: stats.avgFinalScore, color: [16, 185, 129] },
        ];
        const barMaxW = contentW - 140;
        for (const s of scores) {
            doc.fillColor(TEXT_SECONDARY).font("Helvetica").fontSize(9);
            doc.text(s.label, PAGE_MARGIN, y + 2, { width: 110 });
            doc.save();
            doc.roundedRect(PAGE_MARGIN + 115, y, barMaxW, 14, 3).fill(LIGHT_BG);
            const fillW = Math.max(0, (s.value / maxRef) * barMaxW);
            if (fillW > 0) {
                doc.roundedRect(PAGE_MARGIN + 115, y, fillW, 14, 3).fill(s.color);
            }
            doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(9);
            doc.text(s.value > 0 ? s.value.toFixed(2) : "N/A", PAGE_MARGIN + 120 + barMaxW, y + 2);
            doc.restore();
            y += 22;
        }
        const totalDist = Array.from(stats.scoreDistribution.values()).reduce((a, b) => a + b, 0);
        if (totalDist > 0) {
            y += 8;
            doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(10);
            doc.text("Final Score Distribution", PAGE_MARGIN, y);
            y += 16;
            const bucketCount = stats.globalMaxScore;
            const maxBars = Math.min(bucketCount, 20);
            const distBarW = (contentW - 50) / maxBars;
            for (let i = 0; i < maxBars; i++) {
                const scoreVal = i + 1;
                const x = PAGE_MARGIN + i * (distBarW + 2);
                const count = stats.scoreDistribution.get(scoreVal) ?? 0;
                const pct = totalDist > 0 ? count / totalDist : 0;
                const barH = Math.max(4, pct * 50);
                doc.save();
                doc.roundedRect(x, y + 50 - barH, distBarW - 2, barH, 2).fill(BRAND);
                doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(7);
                doc.text(count.toString(), x, y + 50 - barH - 12, { width: distBarW - 2, align: "center" });
                doc.fillColor(TEXT_SECONDARY).font("Helvetica").fontSize(7);
                doc.text(scoreVal.toString(), x, y + 54, { width: distBarW - 2, align: "center" });
                doc.restore();
            }
            y += 74;
        }
        return y;
    }
    drawDepartmentBreakdown(doc, startY, contentW, stats, _pageW) {
        doc.fillColor(TEXT_PRIMARY).font("Helvetica-Bold").fontSize(12);
        doc.text("Department Breakdown", PAGE_MARGIN, startY);
        let y = startY + 20;
        const colWidths = [contentW * 0.45, contentW * 0.25, contentW * 0.3];
        doc.save();
        doc.rect(PAGE_MARGIN, y, contentW, 20).fill(BRAND);
        doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(9);
        doc.text("Department", PAGE_MARGIN + 8, y + 5, { width: colWidths[0] });
        doc.text("Evaluations", PAGE_MARGIN + colWidths[0] + 8, y + 5, { width: colWidths[1] });
        doc.text("Avg Final Score", PAGE_MARGIN + colWidths[0] + colWidths[1] + 8, y + 5, { width: colWidths[2] });
        doc.restore();
        y += 20;
        for (let i = 0; i < stats.byDepartment.length; i++) {
            const dept = stats.byDepartment[i];
            const rowBg = i % 2 === 0 ? WHITE : LIGHT_BG;
            doc.save();
            doc.rect(PAGE_MARGIN, y, contentW, 18).fill(rowBg);
            doc.fillColor(TEXT_PRIMARY).font("Helvetica").fontSize(9);
            doc.text(dept.name, PAGE_MARGIN + 8, y + 4, { width: colWidths[0] });
            doc.text(dept.count.toString(), PAGE_MARGIN + colWidths[0] + 8, y + 4, { width: colWidths[1] });
            doc.text(dept.avgFinal > 0 ? dept.avgFinal.toFixed(2) : "—", PAGE_MARGIN + colWidths[0] + colWidths[1] + 8, y + 4, { width: colWidths[2] });
            doc.restore();
            y += 18;
        }
        doc.save();
        doc.rect(PAGE_MARGIN, startY + 20, contentW, y - startY - 20).stroke(BORDER);
        doc.restore();
        return y;
    }
    drawEvaluationTable(doc, startY, contentW, evaluations, cycle, pageW) {
        let y = startY;
        const colW = {
            name: contentW * 0.15,
            dept: contentW * 0.10,
            status: contentW * 0.10,
            sheet: contentW * 0.10,
            question: contentW * 0.25,
            self: contentW * 0.08,
            mgr: contentW * 0.08,
            final: contentW * 0.08,
            max: contentW * 0.06,
        };
        const rowH = 16;
        const headerH = 22;
        const drawTableHeader = (yPos) => {
            doc.save();
            doc.rect(PAGE_MARGIN, yPos, contentW, headerH).fill(BRAND);
            doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(7);
            let x = PAGE_MARGIN + 4;
            doc.text("Employee", x, yPos + 6, { width: colW.name });
            x += colW.name;
            doc.text("Dept", x, yPos + 6, { width: colW.dept });
            x += colW.dept;
            doc.text("Status", x, yPos + 6, { width: colW.status });
            x += colW.status;
            doc.text("Sheet", x, yPos + 6, { width: colW.sheet });
            x += colW.sheet;
            doc.text("Question", x, yPos + 6, { width: colW.question });
            x += colW.question;
            doc.text("Self", x, yPos + 6, { width: colW.self, align: "center" });
            x += colW.self;
            doc.text("Mgr", x, yPos + 6, { width: colW.mgr, align: "center" });
            x += colW.mgr;
            doc.text("Final", x, yPos + 6, { width: colW.final, align: "center" });
            x += colW.final;
            doc.text("Max", x, yPos + 6, { width: colW.max, align: "center" });
            doc.restore();
            return yPos + headerH;
        };
        y = drawTableHeader(y);
        let rowIdx = 0;
        for (const evaluation of evaluations) {
            const empName = `${evaluation.employee.firstName} ${evaluation.employee.lastName}`;
            const dept = evaluation.employee.department?.name ?? "N/A";
            const status = STATUS_LABELS[evaluation.status] ?? evaluation.status;
            for (let ai = 0; ai < evaluation.answers.length; ai++) {
                const answer = evaluation.answers[ai];
                if (y + rowH > doc.page.height - 50) {
                    doc.addPage();
                    this.drawPdfHeader(doc, cycle, pageW);
                    y = HEADER_H + 30;
                    y = drawTableHeader(y);
                }
                const bg = rowIdx % 2 === 0 ? WHITE : LIGHT_BG;
                doc.save();
                doc.rect(PAGE_MARGIN, y, contentW, rowH).fill(bg);
                doc.fillColor(TEXT_PRIMARY).font("Helvetica").fontSize(7);
                let x = PAGE_MARGIN + 4;
                if (ai === 0) {
                    doc.font("Helvetica-Bold").text(empName, x, y + 4, { width: colW.name, lineBreak: false });
                    doc.font("Helvetica");
                    doc.text(dept, x + colW.name, y + 4, { width: colW.dept, lineBreak: false });
                    doc.text(status, x + colW.name + colW.dept, y + 4, { width: colW.status, lineBreak: false });
                }
                x = PAGE_MARGIN + 4 + colW.name + colW.dept + colW.status;
                doc.text(answer.question.sheet.name, x, y + 4, { width: colW.sheet, lineBreak: false });
                x += colW.sheet;
                const qText = answer.question.text.length > 40
                    ? answer.question.text.substring(0, 37) + "..."
                    : answer.question.text;
                doc.text(qText, x, y + 4, { width: colW.question, lineBreak: false });
                x += colW.question;
                const maxS = answer.question.sheet.maxScore;
                const drawScore = (score, w) => {
                    if (score == null) {
                        doc.fillColor(TEXT_SECONDARY).text("—", x, y + 4, { width: w, align: "center" });
                    }
                    else {
                        const ratio = score / maxS;
                        const scoreColor = ratio >= 0.8 ? [16, 185, 129] : ratio >= 0.6 ? [59, 130, 246] : ratio >= 0.4 ? [245, 158, 11] : [239, 68, 68];
                        doc.fillColor(scoreColor).font("Helvetica-Bold").text(score.toString(), x, y + 4, { width: w, align: "center" });
                        doc.font("Helvetica").fillColor(TEXT_PRIMARY);
                    }
                    x += w;
                };
                drawScore(answer.selfScore, colW.self);
                drawScore(answer.managerScore, colW.mgr);
                drawScore(answer.finalScore, colW.final);
                doc.fillColor(TEXT_SECONDARY).text(maxS.toString(), x, y + 4, { width: colW.max, align: "center" });
                doc.restore();
                y += rowH;
                rowIdx++;
            }
        }
        doc.save();
        doc.rect(PAGE_MARGIN, startY, contentW, y - startY).stroke(BORDER);
        doc.restore();
        return y;
    }
    buildSummarySheet(workbook, cycle, stats) {
        const sheet = workbook.addWorksheet("Summary");
        sheet.mergeCells("A1:F1");
        const titleCell = sheet.getCell("A1");
        titleCell.value = `Performance Evaluation Report — ${cycle.name}`;
        titleCell.font = { size: 16, bold: true, color: { argb: `FF${BRAND_HEX}` } };
        titleCell.alignment = { vertical: "middle" };
        sheet.getRow(1).height = 36;
        sheet.mergeCells("A2:F2");
        const subCell = sheet.getCell("A2");
        subCell.value = `${this.fmtDate(cycle.startDate)} — ${this.fmtDate(cycle.endDate)}  •  Generated: ${this.fmtDate(new Date())}`;
        subCell.font = { size: 10, color: { argb: "FF64748B" } };
        const kpiStart = 4;
        const kpis = [
            ["Total Evaluations", stats.total],
            ["Draft", stats.byStatus[EvaluationStatus.DRAFT] ?? 0],
            ["Manager Review", stats.byStatus[EvaluationStatus.SUBMITTED_TO_MANAGER] ?? 0],
            ["Calibration", stats.byStatus[EvaluationStatus.SUBMITTED_TO_CALIBRATION] ?? 0],
            ["Finalized", stats.byStatus[EvaluationStatus.FINALIZED] ?? 0],
            ["", ""],
            ["Avg Self Score", stats.avgSelfScore],
            ["Avg Manager Score", stats.avgManagerScore],
            ["Avg Final Score", stats.avgFinalScore],
        ];
        sheet.getCell(`A${kpiStart}`).value = "Key Metrics";
        sheet.getCell(`A${kpiStart}`).font = { size: 12, bold: true };
        kpis.forEach(([label, value], i) => {
            const row = kpiStart + 1 + i;
            sheet.getCell(`A${row}`).value = label;
            sheet.getCell(`A${row}`).font = { color: { argb: "FF64748B" } };
            sheet.getCell(`B${row}`).value = value;
            sheet.getCell(`B${row}`).font = { bold: true };
        });
        sheet.getColumn(1).width = 24;
        sheet.getColumn(2).width = 16;
    }
    buildDetailSheet(workbook, evaluations) {
        const sheet = workbook.addWorksheet("Evaluations");
        const columns = [
            { header: "Employee", key: "employee", width: 24 },
            { header: "Email", key: "email", width: 28 },
            { header: "Department", key: "department", width: 18 },
            { header: "Level", key: "level", width: 14 },
            { header: "Status", key: "status", width: 18 },
            { header: "Sheet", key: "sheet", width: 20 },
            { header: "Question", key: "question", width: 42 },
            { header: "Weight", key: "weight", width: 10 },
            { header: "Max Score", key: "maxScore", width: 12 },
            { header: "Self Score", key: "selfScore", width: 12 },
            { header: "Self Remarks", key: "selfRemarks", width: 30 },
            { header: "Manager Score", key: "managerScore", width: 14 },
            { header: "Manager Remarks", key: "managerRemarks", width: 30 },
            { header: "Final Score", key: "finalScore", width: 12 },
        ];
        sheet.columns = columns;
        const headerRow = sheet.getRow(1);
        headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
        headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${BRAND_HEX}` } };
        headerRow.alignment = { vertical: "middle" };
        headerRow.height = 24;
        for (const evaluation of evaluations) {
            for (const answer of evaluation.answers) {
                const maxS = answer.question.sheet.maxScore;
                const row = sheet.addRow({
                    employee: `${evaluation.employee.firstName} ${evaluation.employee.lastName}`,
                    email: evaluation.employee.email,
                    department: evaluation.employee.department?.name ?? "N/A",
                    level: evaluation.employee.level?.name ?? "N/A",
                    status: STATUS_LABELS[evaluation.status] ?? evaluation.status,
                    sheet: answer.question.sheet.name,
                    question: answer.question.text,
                    weight: answer.question.weight,
                    maxScore: maxS,
                    selfScore: answer.selfScore,
                    selfRemarks: answer.selfRemarks ?? "",
                    managerScore: answer.managerScore,
                    managerRemarks: answer.managerRemarks ?? "",
                    finalScore: answer.finalScore,
                });
                for (const col of [10, 12, 14]) {
                    const cell = row.getCell(col);
                    const score = cell.value;
                    if (score != null && typeof score === "number") {
                        const ratio = score / maxS;
                        cell.font = { bold: true, color: { argb: ratio >= 0.8 ? "FF10B981" : ratio >= 0.6 ? "FF3B82F6" : ratio >= 0.4 ? "FFF59E0B" : "FFEF4444" } };
                    }
                }
            }
        }
        sheet.eachRow({ includeEmpty: false }, (row, rowNum) => {
            if (rowNum > 1 && rowNum % 2 === 0) {
                row.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF1F5F9" } };
            }
        });
        sheet.autoFilter = { from: "A1", to: `N${sheet.rowCount}` };
        sheet.views = [{ state: "frozen", ySplit: 1 }];
    }
    buildDepartmentSheet(workbook, stats) {
        const sheet = workbook.addWorksheet("By Department");
        sheet.columns = [
            { header: "Department", key: "name", width: 28 },
            { header: "Evaluations", key: "count", width: 14 },
            { header: "Avg Final Score", key: "avgFinal", width: 16 },
        ];
        const headerRow = sheet.getRow(1);
        headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
        headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${BRAND_HEX}` } };
        headerRow.height = 24;
        for (const dept of stats.byDepartment) {
            const row = sheet.addRow({
                name: dept.name,
                count: dept.count,
                avgFinal: dept.avgFinal > 0 ? dept.avgFinal : null,
            });
            const scoreCell = row.getCell(3);
            if (dept.avgFinal > 0) {
                scoreCell.font = { bold: true, color: { argb: dept.avgFinal >= 4 ? "FF10B981" : dept.avgFinal >= 3 ? "FF3B82F6" : "FFF59E0B" } };
            }
        }
        sheet.views = [{ state: "frozen", ySplit: 1 }];
    }
    fmtDate(d) {
        return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    }
};
ReportsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ReportsService);
export { ReportsService };
//# sourceMappingURL=reports.service.js.map