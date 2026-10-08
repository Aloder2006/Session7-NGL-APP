import "dotenv/config";

import "./lib/db/mongoose.js";
import express from "express";
import router from "./route.js";
import cors from "cors";
import { globalErrorHandler } from "./lib/error/error.handler.js";

export function createApp() {
    const app = express();
    app.use(
        cors({
            origin: true,
            credentials: true,
        }),
    );

    app.use(express.json());

    app.use("/api", router);

    // global error handler
    app.use(globalErrorHandler);

    return app;
}
