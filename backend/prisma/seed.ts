import { PrismaClient, UserRole } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

const connectionString = process.env["DATABASE_URL"];
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const BCRYPT_ROUNDS = 12;
const DEFAULT_PASSWORD = "Password@123";

// ─── Template Data (from Excel evaluation template) ──────

interface SheetDef {
  name: string;
  weight: number;
  minScore: number;
  maxScore: number;
  sortOrder: number;
  questions: { text: string; category: string; weight: number; sortOrder: number }[];
}

const GENERAL_SHEET: SheetDef = {
  name: "GENERAL",
  weight: 100,
  minScore: 1,
  maxScore: 10,
  sortOrder: 0,
  questions: [
    {
      text: "I4nnova core values: Innovation, Impact, Integrity, Ingenuity",
      category: "I4 TENETS",
      weight: 10,
      sortOrder: 0,
    },
    {
      text: [
        "• Work well with team members",
        "• Work well with members of other teams",
        "• Productive contributions to team efforts",
        "• Reliability in teams",
      ].join("\n"),
      category: "TEAMWORK",
      weight: 10,
      sortOrder: 1,
    },
    {
      text: [
        "• Leadership: Relationship building, Agility and adaptability, creativity, Decision-making, Conflict management, Negotiation, Critical Thinking, Ability to take initiative",
        "• Interpersonal Skills: verbal and nonverbal communication, the ability to handle conflict, teamwork, empathy, listening, and a positive attitude",
        "• Communication skills: verbal and written communication with clients, supervisors and team members",
      ].join("\n"),
      category: "DESIRED SOFT SKILLS",
      weight: 10,
      sortOrder: 2,
    },
    {
      text: [
        "• Client engagement, relationship, support",
        "• Business Process, Support, Client session documentation",
        "• Timely delivery of tasks with minimal to no supervision",
        "• Proactive in task delivery and problem solving",
        "• Improved knowledge of business processes",
        "• Issue resolution research and troubleshooting",
      ].join("\n"),
      category: "DESIRED BUSINESS CONSULTING SKILLS",
      weight: 20,
      sortOrder: 3,
    },
    {
      text: [
        "• MS PowerPoint",
        "• MS Sharepoint",
        "• MS Outlook",
        "• MS Teams",
        "• MS Excel",
      ].join("\n"),
      category: "DESIRED TECH / APPLICATION SKILLS",
      weight: 10,
      sortOrder: 4,
    },
    {
      text: "• Initiate and/or contribute to team bonding ideas and activities",
      category: "I4 SOCIAL ENGAGEMENTS",
      weight: 10,
      sortOrder: 5,
    },
    {
      text: [
        "• Punctuality: Coming in to work on or before resumption time; Logging in to virtual calls on time",
        "• Attendance: High/Consistent Attendance, Logging in to virtual calls on time",
        "• Personal Growth: Proven personal effort to upskill",
      ].join("\n"),
      category: "ATTITUDE TO WORK",
      weight: 10,
      sortOrder: 6,
    },
    {
      text: [
        "• Open SAP: Record of Achievement: Your HR Journey to the cloud",
        "• SuccessFactors: Employee Central",
        "• SuccessFactors: PMGM",
        "• SuccessFactors: Compensation",
        "• SuccessFactors: LMS",
      ].join("\n"),
      category: "CERTIFICATIONS",
      weight: 20,
      sortOrder: 7,
    },
  ],
};

const SUCCESS_FACTORS_SHEET: SheetDef = {
  name: "SUCCESS FACTORS",
  weight: 70,
  minScore: 1,
  maxScore: 10,
  sortOrder: 1,
  questions: [
    {
      text: [
        "• Mastery of business process: EC, Compensation, PMGM",
        "• Solution Demo",
        "• Solution Configuration: Modules, Administration",
      ].join("\n"),
      category: "SUCCESS FACTORS",
      weight: 15,
      sortOrder: 0,
    },
    {
      text: [
        "• Ability to facilitate requirement gathering session with client",
        "• Fit to standard: Ability to interpret how SuccessFactors executes client process",
        "• Effective documentation of requirements",
        "• Support senior/external consultants on requirement gathering activities",
        "• Effective workbook utilization",
      ].join("\n"),
      category: "REQUIREMENT GATHERING",
      weight: 10,
      sortOrder: 1,
    },
    {
      text: [
        "• Generation of test scripts",
        "• UAT delivery to clients: Onboarding/Offboarding",
        "• Ability to handle client engagement in UAT session",
      ].join("\n"),
      category: "UAT",
      weight: 20,
      sortOrder: 2,
    },
    {
      text: [
        "• Generation of training manuals",
        "• Delivery of training session: Onboarding/Offboarding",
        "• Ability to handle client engagement in Training session",
      ].join("\n"),
      category: "TRAINING",
      weight: 20,
      sortOrder: 3,
    },
    {
      text: [
        "• Facilitate data template sessions with clients",
        "• Data cleaning, validation and upload to SF systems",
      ].join("\n"),
      category: "DATA MANAGEMENT",
      weight: 5,
      sortOrder: 4,
    },
  ],
};

const PAYROLL_SHEET: SheetDef = {
  name: "PAYROLL",
  weight: 30,
  minScore: 1,
  maxScore: 10,
  sortOrder: 2,
  questions: [
    {
      text: [
        "• Ability to facilitate requirement gathering session with client",
        "• Effective documentation of requirements",
      ].join("\n"),
      category: "REQUIREMENT GATHERING",
      weight: 15,
      sortOrder: 0,
    },
    {
      text: "• Effective contribution to I4 smart development",
      category: "I4 SMART SOLUTION DEVELOPMENT",
      weight: 15,
      sortOrder: 1,
    },
  ],
};

async function createSheetWithQuestions(
  cycleId: string,
  departmentId: string,
  levelId: string,
  sheetDef: SheetDef,
) {
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

  // ─── Departments ────────────────────────────────────────
  const departments = await Promise.all(
    ["Engineering", "Human Resources", "Finance", "Marketing", "Operations"].map(
      (name) =>
        prisma.department.upsert({
          where: { name },
          update: {},
          create: { name },
        }),
    ),
  );
  console.log(`Upserted ${departments.length} departments`);

  // ─── Levels ─────────────────────────────────────────────
  const levels = await Promise.all(
    ["Junior", "Mid-Level", "Senior", "Lead", "Principal"].map((name) =>
      prisma.level.upsert({
        where: { name },
        update: {},
        create: { name },
      }),
    ),
  );
  console.log(`Upserted ${levels.length} levels`);

  const hashedDefault = await bcrypt.hash(DEFAULT_PASSWORD, BCRYPT_ROUNDS);
  const hashedAdmin = await bcrypt.hash(adminPassword, BCRYPT_ROUNDS);

  // ─── Admin ──────────────────────────────────────────────
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

  // ─── Line Manager ──────────────────────────────────────
  const manager = await prisma.user.upsert({
    where: { email: "manager@eval.local" },
    update: {},
    create: {
      email: "manager@eval.local",
      password: hashedDefault,
      firstName: "Sarah",
      lastName: "Connor",
      role: UserRole.LINE_MANAGER,
      departmentId: departments[0]!.id,
      levelId: levels[3]!.id,
    },
  });
  console.log(`Manager: ${manager.email} (${manager.id})`);

  // ─── Calibration Member ────────────────────────────────
  const calibrator = await prisma.user.upsert({
    where: { email: "calibrator@eval.local" },
    update: {},
    create: {
      email: "calibrator@eval.local",
      password: hashedDefault,
      firstName: "James",
      lastName: "Kirk",
      role: UserRole.CALIBRATION,
      departmentId: departments[1]!.id,
      levelId: levels[4]!.id,
    },
  });
  console.log(`Calibrator: ${calibrator.email} (${calibrator.id})`);

  // ─── Employees ──────────────────────────────────────────
  const employeeData = [
    { email: "alice@eval.local", firstName: "Alice", lastName: "Johnson", deptIdx: 0, lvlIdx: 1 },
    { email: "bob@eval.local", firstName: "Bob", lastName: "Williams", deptIdx: 0, lvlIdx: 0 },
    { email: "carol@eval.local", firstName: "Carol", lastName: "Davis", deptIdx: 0, lvlIdx: 2 },
    { email: "dave@eval.local", firstName: "Dave", lastName: "Brown", deptIdx: 2, lvlIdx: 1 },
    { email: "eve@eval.local", firstName: "Eve", lastName: "Martinez", deptIdx: 3, lvlIdx: 0 },
  ];

  const employees = await Promise.all(
    employeeData.map((e) =>
      prisma.user.upsert({
        where: { email: e.email },
        update: {},
        create: {
          email: e.email,
          password: hashedDefault,
          firstName: e.firstName,
          lastName: e.lastName,
          role: UserRole.EMPLOYEE,
          departmentId: departments[e.deptIdx]!.id,
          levelId: levels[e.lvlIdx]!.id,
          lineManagerId: manager.id,
        },
      }),
    ),
  );
  console.log(`Upserted ${employees.length} employees`);

  // ─── Evaluation Cycles ──────────────────────────────────
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
  } else {
    console.log(`Cycle already exists: ${cycle.name} (${cycle.id})`);
  }

  const systemTestName = "system-test";
  let systemTestCycle = await prisma.evaluationCycle.findFirst({ where: { name: systemTestName } });
  if (!systemTestCycle) {
    systemTestCycle = await prisma.evaluationCycle.create({
      data: {
        name: systemTestName,
        startDate: new Date("2026-04-01"),
        endDate: new Date("2026-06-30"),
        calibrationMembers: { create: [{ userId: calibrator.id }] },
      },
    });
    console.log(`Created cycle: ${systemTestCycle.name} (${systemTestCycle.id})`);
  } else {
    console.log(`Cycle already exists: ${systemTestCycle.name} (${systemTestCycle.id})`);
  }

  // Shared sheet templates for all cycles (derived from Excel evaluation template).
  const sheetTemplates: { deptIdx: number; lvlIdx: number; sheets: SheetDef[] }[] = [
    { deptIdx: 0, lvlIdx: 0, sheets: [GENERAL_SHEET, SUCCESS_FACTORS_SHEET] },
    { deptIdx: 0, lvlIdx: 1, sheets: [GENERAL_SHEET, SUCCESS_FACTORS_SHEET] },
    { deptIdx: 0, lvlIdx: 2, sheets: [GENERAL_SHEET, SUCCESS_FACTORS_SHEET] },
    { deptIdx: 2, lvlIdx: 1, sheets: [GENERAL_SHEET, PAYROLL_SHEET] },
    { deptIdx: 3, lvlIdx: 0, sheets: [GENERAL_SHEET] },
  ];

  // ─── Evaluation Sheets & Questions: Q1 2026 ─────────────
  // Create sheets for each department + level combo that has employees.
  // GENERAL applies to all; SUCCESS FACTORS to Engineering; PAYROLL to Finance.
  const existingSheets = await prisma.evaluationSheet.count({ where: { cycleId: cycle.id } });

  if (existingSheets === 0) {
    let totalSheets = 0;
    let totalQuestions = 0;

    for (const tmpl of sheetTemplates) {
      const dept = departments[tmpl.deptIdx]!;
      const level = levels[tmpl.lvlIdx]!;

      for (const sheetDef of tmpl.sheets) {
        const sheet = await createSheetWithQuestions(cycle.id, dept.id, level.id, sheetDef);
        totalSheets++;
        totalQuestions += sheet.questions.length;
      }
    }

    console.log(`Created ${totalSheets} evaluation sheets with ${totalQuestions} total questions`);
  } else {
    console.log(`Sheets already exist for cycle (${existingSheets} found)`);
  }

  // ─── Evaluation Sheets & Questions: system-test ─────────
  const existingSystemTestSheets = await prisma.evaluationSheet.count({
    where: { cycleId: systemTestCycle.id },
  });

  if (existingSystemTestSheets === 0) {
    let totalSheets = 0;
    let totalQuestions = 0;

    for (const tmpl of sheetTemplates) {
      const dept = departments[tmpl.deptIdx]!;
      const level = levels[tmpl.lvlIdx]!;

      for (const sheetDef of tmpl.sheets) {
        const sheet = await createSheetWithQuestions(systemTestCycle.id, dept.id, level.id, sheetDef);
        totalSheets++;
        totalQuestions += sheet.questions.length;
      }
    }

    console.log(
      `Created ${totalSheets} evaluation sheets with ${totalQuestions} total questions for system-test`,
    );
  } else {
    console.log(`Sheets already exist for system-test cycle (${existingSystemTestSheets} found)`);
  }

  console.log("\nSeed complete. Demo credentials:");
  console.log(`  Admin:      ${adminEmail} / ${adminPassword}`);
  console.log(`  Manager:    manager@eval.local / ${DEFAULT_PASSWORD}`);
  console.log(`  Calibrator: calibrator@eval.local / ${DEFAULT_PASSWORD}`);
  console.log(`  Employees:  alice|bob|carol|dave|eve @eval.local / ${DEFAULT_PASSWORD}`);
}

main()
  .catch((e: unknown) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
