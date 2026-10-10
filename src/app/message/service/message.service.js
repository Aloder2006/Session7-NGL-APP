import * as userRepository from '../../user/repository/user.repository.js'
import * as messageRepository from '../repository/message.repository.js'
import { userNotExist } from '../../user/errors.js';
import { AppError } from '../../../lib/error/error.js';

export async function sendMessage(content, receiver, sender) {
    //1. check if receiver exists
    const user = await userRepository.findUserById(receiver);
    // if not exist throw error
    if (!user) throw userNotExist; 
    //2. save message in db
    return await messageRepository.createMessage(content, receiver, sender)
    
}

export async function getAllMessages(userId) {
    const messages = await messageRepository.getAllMessages(userId);
    if(messages.length === 0) throw new AppError("No messages found", 404)
    return messages;
}