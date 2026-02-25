-- Migration: add_evaluation_sheets
-- Introduces the EvaluationSheet model between EvaluationCycle and EvaluationQuestion.
-- Questions now belong to a sheet instead of directly referencing cycle/dept/level.

-- 1. Create evaluation_sheets table
CREATE TABLE IF NOT EXISTS evaluation_sheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  weight INTEGER NOT NULL DEFAULT 100,
  "minScore" INTEGER NOT NULL DEFAULT 1,
  "maxScore" INTEGER NOT NULL DEFAULT 10,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "cycleId" UUID NOT NULL REFERENCES evaluation_cycles(id) ON DELETE CASCADE,
  "departmentId" UUID NOT NULL REFERENCES departments(id),
  "levelId" UUID NOT NULL REFERENCES levels(id)
);

CREATE INDEX IF NOT EXISTS idx_evaluation_sheets_cycle_dept_level
  ON evaluation_sheets("cycleId", "departmentId", "levelId");

-- 2. Migrate existing questions: create a default sheet per unique (cycleId, departmentId, levelId)
INSERT INTO evaluation_sheets (id, name, weight, "minScore", "maxScore", "sortOrder", "createdAt", "updatedAt", "cycleId", "departmentId", "levelId")
SELECT DISTINCT
  gen_random_uuid(),
  'DEFAULT',
  100,
  1,
  5,
  0,
  now(),
  now(),
  "cycleId",
  "departmentId",
  "levelId"
FROM evaluation_questions;

-- 3. Add sheetId column to evaluation_questions
ALTER TABLE evaluation_questions ADD COLUMN IF NOT EXISTS "sheetId" UUID;

-- 4. Populate sheetId from the default sheets we just created
UPDATE evaluation_questions eq
SET "sheetId" = es.id
FROM evaluation_sheets es
WHERE eq."cycleId" = es."cycleId"
  AND eq."departmentId" = es."departmentId"
  AND eq."levelId" = es."levelId";

-- 5. Make sheetId NOT NULL and add FK constraint
ALTER TABLE evaluation_questions ALTER COLUMN "sheetId" SET NOT NULL;
ALTER TABLE evaluation_questions
  ADD CONSTRAINT fk_evaluation_questions_sheet
  FOREIGN KEY ("sheetId") REFERENCES evaluation_sheets(id) ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS idx_evaluation_questions_sheet ON evaluation_questions("sheetId");

-- 6. Drop old columns and their indexes/constraints from evaluation_questions
ALTER TABLE evaluation_questions DROP CONSTRAINT IF EXISTS "evaluation_questions_cycleId_fkey";
ALTER TABLE evaluation_questions DROP CONSTRAINT IF EXISTS "evaluation_questions_departmentId_fkey";
ALTER TABLE evaluation_questions DROP CONSTRAINT IF EXISTS "evaluation_questions_levelId_fkey";
DROP INDEX IF EXISTS "evaluation_questions_cycleId_departmentId_levelId_idx";
ALTER TABLE evaluation_questions DROP COLUMN IF EXISTS "cycleId";
ALTER TABLE evaluation_questions DROP COLUMN IF EXISTS "departmentId";
ALTER TABLE evaluation_questions DROP COLUMN IF EXISTS "levelId";
