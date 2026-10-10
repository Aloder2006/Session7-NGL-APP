import * as messageService from "../service/message.service.js";
import { validateBody } from "../../../lib/validation/validation.js";
import { sendMessageDto } from "../dto/message.dto.js";

export async function sendMessage(req, res, next) {
    try {
        const data = validateBody(sendMessageDto, req.body);
        const { content, receiver } = data;
        const sender = req.user?.id;
        const createdMessage = await messageService.sendMessage(
            content,
            receiver,
            sender,
        );
        res.status(201).json({
            status: "success",
            message: "Message sent successfully",
            data: createdMessage,
        });
    } catch (error) {
        next(error);
    }
}

export async function getAllMessages(req, res, next) {
    try {
        const userId = req.user.id;
        const messages = await messageService.getAllMessages(userId);
        res.status(200).json({
            status: "success",
            message: "Messages retrieved successfully",
            data: messages,
        });
    } catch (error) {
        next(error);
    }
}
