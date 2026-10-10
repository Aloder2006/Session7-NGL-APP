import { MailJetProvider } from "../../pkg/email/mailjet.js";
import { env } from "../config/env.js";

export const mailProvider = new MailJetProvider({
    apiKey: env.mailjet.apiKey,
    secretKey: env.mailjet.secretKey,
    fromEmail: env.mailjet.fromEmail,
    fromName: env.mailjet.fromName,
});