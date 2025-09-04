import { z } from "zod";

export const CreateUserSchema = z.object({
    username: z.string().min(3).max(30),
    password: z.string(),
    Fullname: z.string()
});

export const SignInSchema = z.object({
    username: z.string().min(3).max(30),
    password: z.string()
});

export const CreateRoomSchema = z.object({
    roomName: z.string().min(3).max(30)
});