import Joi from "joi";
export const appConfigValidationSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid("development", "production", "test")
        .default("development"),
    PORT: Joi.number().default(3000),
    API_PREFIX: Joi.string().default("api/v1"),
    FRONTEND_URL: Joi.string().uri().default("http://localhost:3001"),
    DATABASE_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.string().default("15m"),
    JWT_REFRESH_SECRET: Joi.string().required(),
    JWT_REFRESH_EXPIRES_IN: Joi.string().default("7d"),
    RESEND_API_KEY: Joi.string().optional(),
});
//# sourceMappingURL=app.config.js.map