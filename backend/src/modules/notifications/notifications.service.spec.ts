import { Test, TestingModule } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { NotificationsService } from "./notifications.service.js";

const mockSend = jest.fn().mockResolvedValue({ id: "email-1" });

jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: mockSend },
  })),
}));

describe("NotificationsService", () => {
  let service: NotificationsService;

  beforeEach(async () => {
    jest.clearAllMocks();
    const mod: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        {
          provide: ConfigService,
          useValue: { getOrThrow: jest.fn().mockReturnValue("test-api-key") },
        },
      ],
    }).compile();
    service = mod.get(NotificationsService);
  });

  describe("notifyCycleStarted", () => {
    it("sends emails to all employees", async () => {
      await service.notifyCycleStarted(
        ["a@test.com", "b@test.com"],
        "Q1 2026",
        "http://app/evaluations",
      );
      expect(mockSend).toHaveBeenCalledTimes(2);
      expect(mockSend).toHaveBeenCalledWith(
        expect.objectContaining({ to: "a@test.com", subject: expect.stringContaining("Q1 2026") }),
      );
    });
  });

  describe("notifySelfEvaluationSubmitted", () => {
    it("sends email to the manager", async () => {
      await service.notifySelfEvaluationSubmitted(
        "mgr@test.com",
        "Alice Smith",
        "http://app/evaluations/e1/review",
      );
      expect(mockSend).toHaveBeenCalledTimes(1);
      expect(mockSend).toHaveBeenCalledWith(
        expect.objectContaining({
          to: "mgr@test.com",
          subject: expect.stringContaining("Alice Smith"),
        }),
      );
    });
  });

  describe("notifyManagerReviewSubmitted", () => {
    it("sends emails to calibration team", async () => {
      await service.notifyManagerReviewSubmitted(
        ["cal1@test.com", "cal2@test.com"],
        "Bob Jones",
        "Engineering",
        "http://app/evaluations/e1/calibrate",
      );
      expect(mockSend).toHaveBeenCalledTimes(2);
    });
  });

  describe("notifyEvaluationFinalized", () => {
    it("sends emails to both employee and manager", async () => {
      await service.notifyEvaluationFinalized(
        "emp@test.com",
        "mgr@test.com",
        "Alice Smith",
        "http://app/evaluations/e1",
      );
      expect(mockSend).toHaveBeenCalledTimes(2);
    });
  });

  describe("error handling", () => {
    it("does not throw when email sending fails", async () => {
      mockSend.mockRejectedValueOnce(new Error("API down"));
      await expect(
        service.notifySelfEvaluationSubmitted("mgr@test.com", "Alice", "http://app/e1"),
      ).resolves.not.toThrow();
    });
  });
});
