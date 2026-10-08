import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: env.mail.user,
        pass: env.mail.pass,
    },
});

export async function sendEmail(to, subject, html) {
    await transporter.sendMail({
        from: `"NGL-APP"<${env.mail.user}>`,
        to: to,
        subject: subject,
        html: html,
    });
}
