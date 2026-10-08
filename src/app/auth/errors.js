import { AppError } from "../../lib/error/error.js";

export const expiredOTP = new AppError("OTP is Expired", 404);

export const invalidOTP = new AppError("OTP is Invalid", 400);

export const invalidPassword = new AppError("Invalid Password", 403);
