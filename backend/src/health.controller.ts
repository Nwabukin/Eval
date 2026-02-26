import { Controller, Get } from "@nestjs/common";

/**
 * Provides unprefixed endpoints for platform health checks.
 */
@Controller()
export class HealthController {
  /**
   * Simple root response so the Vercel URL isn't a 404.
   */
  @Get()
  root(): { ok: true; service: "eval-backend" } {
    return { ok: true, service: "eval-backend" };
  }

  /**
   * Health-check endpoint for uptime monitors and load balancers.
   */
  @Get("health")
  health(): { ok: true } {
    return { ok: true };
  }
}

