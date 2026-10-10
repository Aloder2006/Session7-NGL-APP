import "dotenv/config";
import { z } from "zod";

const schema = z.object({
    PORT: z.string().default("3000"),

    MONGODB_URL: z.string(),

    MAIL_USER: z.string().trim().toLowerCase(),
    MAIL_PASS: z.string(),

    JWT_SECRET: z.string(),

    GOOGLE_CLIENT_ID: z.string(),

    REDIS_HOST: z.string(),
    REDIS_PORT: z.string().default("6379"),
    REDIS_PASSWORD: z.string(),

    MAILJET_API_KEY: z.string(),
    MAILJET_API_SECRET: z.string(),
    MAILJET_FROM_EMAIL: z.string(),
    MAILJET_FROM_NAME: z.string(),
});

const parsed = schema.parse(process.env);

export const env = {
    port: Number(parsed.PORT),
    db: {
        url: parsed.MONGODB_URL,
    },
    redis: {
        host: parsed.REDIS_HOST,
        port: Number(parsed.REDIS_PORT),
        password: parsed.REDIS_PASSWORD || "",
    },
    mail: {
        user: parsed.MAIL_USER,
        pass: parsed.MAIL_PASS,
    },
    jwt: {
        secret: parsed.JWT_SECRET,
    },
    google: {
        clientId: parsed.GOOGLE_CLIENT_ID,
    },
    mailjet: {
        apiKey: parsed.MAILJET_API_KEY,
        secretKey: parsed.MAILJET_API_SECRET,
        fromEmail: parsed.MAILJET_FROM_EMAIL,
        fromName: parsed.MAILJET_FROM_NAME,
    },
};
