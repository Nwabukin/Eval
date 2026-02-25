import { PrismaClient, UserRole } from "../generated/prisma/client.js";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
const BCRYPT_ROUNDS = 12;
const DEFAULT_PASSWORD = "Password@123";
const GENERAL_SHEET = {
    name: "GENERAL",
    weight: 100,
    minScore: 1,
    maxScore: 10,
    sortOrder: 0,
    questions: [
        { text: "I4nnova core values: Innovation, Impact, Integrity, Ingenuity", category: "I4 TENETS", weight: 10, sortOrder: 0 },
        { text: "Work well with team members", category: "TEAMWORK", weight: 10, sortOrder: 1 },
        { text: "Work well with members of other teams", category: "TEAMWORK", weight: 10, sortOrder: 2 },
        { text: "Productive contributions to team efforts", category: "TEAMWORK", weight: 10, sortOrder: 3 },
        { text: "Reliability in teams", category: "TEAMWORK", weight: 10, sortOrder: 4 },
        { text: "Leadership: Relationship building, Agility and adaptability, creativity, Decision-making, Conflict management, Negotiation, Critical Thinking, Ability to take initiative", category: "DESIRED SOFT SKILLS", weight: 10, sortOrder: 5 },
        { text: "Interpersonal Skills: verbal and nonverbal communication, the ability to handle conflict, teamwork, empathy, listening, and a positive attitude", category: "DESIRED SOFT SKILLS", weight: 10, sortOrder: 6 },
        { text: "Communication skills: verbal and written communication with clients, supervisors and team members", category: "DESIRED SOFT SKILLS", weight: 10, sortOrder: 7 },
        { text: "Client engagement, relationship, support", category: "DESIRED BUSINESS CONSULTING SKILLS", weight: 20, sortOrder: 8 },
        { text: "Business Process, Support, Client session documentation", category: "DESIRED BUSINESS CONSULTING SKILLS", weight: 20, sortOrder: 9 },
        { text: "Timely delivery of tasks with minimal to no supervision", category: "DESIRED BUSINESS CONSULTING SKILLS", weight: 20, sortOrder: 10 },
        { text: "Proactive in task delivery and problem solving", category: "DESIRED BUSINESS CONSULTING SKILLS", weight: 20, sortOrder: 11 },
        { text: "Improved knowledge of business processes", category: "DESIRED BUSINESS CONSULTING SKILLS", weight: 20, sortOrder: 12 },
        { text: "Issue resolution research and troubleshooting", category: "DESIRED BUSINESS CONSULTING SKILLS", weight: 20, sortOrder: 13 },
        { text: "MS PowerPoint", category: "DESIRED TECH / APPLICATION SKILLS", weight: 10, sortOrder: 14 },
        { text: "MS Sharepoint", category: "DESIRED TECH / APPLICATION SKILLS", weight: 10, sortOrder: 15 },
        { text: "MS Outlook", category: "DESIRED TECH / APPLICATION SKILLS", weight: 10, sortOrder: 16 },
        { text: "MS Teams", category: "DESIRED TECH / APPLICATION SKILLS", weight: 10, sortOrder: 17 },
        { text: "MS Excel", category: "DESIRED TECH / APPLICATION SKILLS", weight: 10, sortOrder: 18 },
        { text: "Initiate and/or contribute to team bonding ideas and activities", category: "I4 SOCIAL ENGAGEMENTS", weight: 10, sortOrder: 19 },
        { text: "Punctuality: Coming in to work on or before resumption time; Logging in to virtual calls on time", category: "ATTITUDE TO WORK", weight: 10, sortOrder: 20 },
        { text: "Attendance: High/Consistent Attendance, Logging in to virtual calls on time", category: "ATTITUDE TO WORK", weight: 10, sortOrder: 21 },
        { text: "Personal Growth: Proven personal effort to upskill", category: "ATTITUDE TO WORK", weight: 10, sortOrder: 22 },
        { text: "Open SAP: Record of Achievement: Your HR Journey to the cloud", category: "CERTIFICATIONS", weight: 20, sortOrder: 23 },
        { text: "SuccessFactors: Employee Central", category: "CERTIFICATIONS", weight: 20, sortOrder: 24 },
        { text: "SuccessFactors: PMGM", category: "CERTIFICATIONS", weight: 20, sortOrder: 25 },
        { text: "SuccessFactors: Compensation", category: "CERTIFICATIONS", weight: 20, sortOrder: 26 },
        { text: "SuccessFactors: LMS", category: "CERTIFICATIONS", weight: 20, sortOrder: 27 },
    ],
};
const SUCCESS_FACTORS_SHEET = {
    name: "SUCCESS FACTORS",
    weight: 70,
    minScore: 1,
    maxScore: 10,
    sortOrder: 1,
    questions: [
        { text: "Mastery of business process: EC, Compensation, PMGM", category: "SUCCESS FACTORS", weight: 15, sortOrder: 0 },
        { text: "Solution Demo", category: "SUCCESS FACTORS", weight: 15, sortOrder: 1 },
        { text: "Solution Configuration: Modules, Administration", category: "SUCCESS FACTORS", weight: 15, sortOrder: 2 },
        { text: "Ability to facilitate requirement gathering session with client", category: "REQUIREMENT GATHERING", weight: 10, sortOrder: 3 },
        { text: "Fit to standard: Ability to interpret how SuccessFactors executes client process", category: "REQUIREMENT GATHERING", weight: 10, sortOrder: 4 },
        { text: "Effective documentation of requirements", category: "REQUIREMENT GATHERING", weight: 10, sortOrder: 5 },
        { text: "Support senior/external consultants on requirement gathering activities", category: "REQUIREMENT GATHERING", weight: 10, sortOrder: 6 },
        { text: "Effective workbook utilization", category: "REQUIREMENT GATHERING", weight: 10, sortOrder: 7 },
        { text: "Generation of test scripts", category: "UAT", weight: 20, sortOrder: 8 },
        { text: "UAT delivery to clients: Onboarding/Offboarding", category: "UAT", weight: 20, sortOrder: 9 },
        { text: "Ability to handle client engagement in UAT session", category: "UAT", weight: 20, sortOrder: 10 },
        { text: "Generation of training manuals", category: "TRAINING", weight: 20, sortOrder: 11 },
        { text: "Delivery of training session: Onboarding/Offboarding", category: "TRAINING", weight: 20, sortOrder: 12 },
        { text: "Ability to handle client engagement in Training session", category: "TRAINING", weight: 20, sortOrder: 13 },
        { text: "Facilitate data template sessions with clients", category: "DATA MANAGEMENT", weight: 5, sortOrder: 14 },
        { text: "Data cleaning, validation and upload to SF systems", category: "DATA MANAGEMENT", weight: 5, sortOrder: 15 },
    ],
};
const PAYROLL_SHEET = {
    name: "PAYROLL",
    weight: 30,
    minScore: 1,
    maxScore: 10,
    sortOrder: 2,
    questions: [
        { text: "Ability to facilitate requirement gathering session with client", category: "REQUIREMENT GATHERING", weight: 15, sortOrder: 0 },
        { text: "Effective documentation of requirements", category: "REQUIREMENT GATHERING", weight: 15, sortOrder: 1 },
        { text: "Effective contribution to I4 smart development", category: "I4 SMART SOLUTION DEVELOPMENT", weight: 15, sortOrder: 2 },
    ],
};
async function createSheetWithQuestions(cycleId, departmentId, levelId, sheetDef) {
    const sheet = await prisma.evaluationSheet.create({
        data: {
            name: sheetDef.name,
            weight: sheetDef.weight,
            minScore: sheetDef.minScore,
            maxScore: sheetDef.maxScore,
            sortOrder: sheetDef.sortOrder,
            cycleId,
            departmentId,
            levelId,
            questions: {
                create: sheetDef.questions.map((q) => ({
                    text: q.text,
                    category: q.category,
                    weight: q.weight,
                    sortOrder: q.sortOrder,
                })),
            },
        },
        include: { questions: true },
    });
    return sheet;
}
async function main() {
    const adminEmail = process.env["ADMIN_EMAIL"] ?? "admin@eval.local";
    const adminPassword = process.env["ADMIN_PASSWORD"] ?? "Admin@123456";
    const departments = await Promise.all(["Engineering", "Human Resources", "Finance", "Marketing", "Operations"].map((name) => prisma.department.upsert({
        where: { name },
        update: {},
        create: { name },
    })));
    console.log(`Upserted ${departments.length} departments`);
    const levels = await Promise.all(["Junior", "Mid-Level", "Senior", "Lead", "Principal"].map((name) => prisma.level.upsert({
        where: { name },
        update: {},
        create: { name },
    })));
    console.log(`Upserted ${levels.length} levels`);
    const hashedDefault = await bcrypt.hash(DEFAULT_PASSWORD, BCRYPT_ROUNDS);
    const hashedAdmin = await bcrypt.hash(adminPassword, BCRYPT_ROUNDS);
    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            password: hashedAdmin,
            firstName: "System",
            lastName: "Admin",
            role: UserRole.ADMIN,
        },
    });
    console.log(`Admin: ${admin.email} (${admin.id})`);
    const manager = await prisma.user.upsert({
        where: { email: "manager@eval.local" },
        update: {},
        create: {
            email: "manager@eval.local",
            password: hashedDefault,
            firstName: "Sarah",
            lastName: "Connor",
            role: UserRole.LINE_MANAGER,
            departmentId: departments[0].id,
            levelId: levels[3].id,
        },
    });
    console.log(`Manager: ${manager.email} (${manager.id})`);
    const calibrator = await prisma.user.upsert({
        where: { email: "calibrator@eval.local" },
        update: {},
        create: {
            email: "calibrator@eval.local",
            password: hashedDefault,
            firstName: "James",
            lastName: "Kirk",
            role: UserRole.CALIBRATION,
            departmentId: departments[1].id,
            levelId: levels[4].id,
        },
    });
    console.log(`Calibrator: ${calibrator.email} (${calibrator.id})`);
    const employeeData = [
        { email: "alice@eval.local", firstName: "Alice", lastName: "Johnson", deptIdx: 0, lvlIdx: 1 },
        { email: "bob@eval.local", firstName: "Bob", lastName: "Williams", deptIdx: 0, lvlIdx: 0 },
        { email: "carol@eval.local", firstName: "Carol", lastName: "Davis", deptIdx: 0, lvlIdx: 2 },
        { email: "dave@eval.local", firstName: "Dave", lastName: "Brown", deptIdx: 2, lvlIdx: 1 },
        { email: "eve@eval.local", firstName: "Eve", lastName: "Martinez", deptIdx: 3, lvlIdx: 0 },
    ];
    const employees = await Promise.all(employeeData.map((e) => prisma.user.upsert({
        where: { email: e.email },
        update: {},
        create: {
            email: e.email,
            password: hashedDefault,
            firstName: e.firstName,
            lastName: e.lastName,
            role: UserRole.EMPLOYEE,
            departmentId: departments[e.deptIdx].id,
            levelId: levels[e.lvlIdx].id,
            lineManagerId: manager.id,
        },
    })));
    console.log(`Upserted ${employees.length} employees`);
    const cycleName = "Q1 2026 Performance Review";
    let cycle = await prisma.evaluationCycle.findFirst({ where: { name: cycleName } });
    if (!cycle) {
        cycle = await prisma.evaluationCycle.create({
            data: {
                name: cycleName,
                startDate: new Date("2026-01-01"),
                endDate: new Date("2026-03-31"),
                calibrationMembers: { create: [{ userId: calibrator.id }] },
            },
        });
        console.log(`Created cycle: ${cycle.name} (${cycle.id})`);
    }
    else {
        console.log(`Cycle already exists: ${cycle.name} (${cycle.id})`);
    }
    const existingSheets = await prisma.evaluationSheet.count({ where: { cycleId: cycle.id } });
    if (existingSheets === 0) {
        const sheetTemplates = [
            { deptIdx: 0, lvlIdx: 0, sheets: [GENERAL_SHEET, SUCCESS_FACTORS_SHEET] },
            { deptIdx: 0, lvlIdx: 1, sheets: [GENERAL_SHEET, SUCCESS_FACTORS_SHEET] },
            { deptIdx: 0, lvlIdx: 2, sheets: [GENERAL_SHEET, SUCCESS_FACTORS_SHEET] },
            { deptIdx: 2, lvlIdx: 1, sheets: [GENERAL_SHEET, PAYROLL_SHEET] },
            { deptIdx: 3, lvlIdx: 0, sheets: [GENERAL_SHEET] },
        ];
        let totalSheets = 0;
        let totalQuestions = 0;
        for (const tmpl of sheetTemplates) {
            const dept = departments[tmpl.deptIdx];
            const level = levels[tmpl.lvlIdx];
            for (const sheetDef of tmpl.sheets) {
                const sheet = await createSheetWithQuestions(cycle.id, dept.id, level.id, sheetDef);
                totalSheets++;
                totalQuestions += sheet.questions.length;
            }
        }
        console.log(`Created ${totalSheets} evaluation sheets with ${totalQuestions} total questions`);
    }
    else {
        console.log(`Sheets already exist for cycle (${existingSheets} found)`);
    }
    console.log("\nSeed complete. Demo credentials:");
    console.log(`  Admin:      ${adminEmail} / ${adminPassword}`);
    console.log(`  Manager:    manager@eval.local / ${DEFAULT_PASSWORD}`);
    console.log(`  Calibrator: calibrator@eval.local / ${DEFAULT_PASSWORD}`);
    console.log(`  Employees:  alice|bob|carol|dave|eve @eval.local / ${DEFAULT_PASSWORD}`);
}
main()
    .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map