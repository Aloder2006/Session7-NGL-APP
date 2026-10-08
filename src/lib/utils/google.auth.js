import { OAuth2Client } from "google-auth-library";
import { AppError } from "../error/error.js";
import { env } from "../config/env.js";

const client = new OAuth2Client({ client_id: env.google.clientId });

export async function verifyGoogleToken(idToken) {
    try {
        const ticket = await client.verifyIdToken({ idToken: idToken });
        return ticket.getPayload();
    } catch (error) {
        throw new AppError("Google Token is invalid", 403);
    }
}
