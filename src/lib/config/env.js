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
};
