"use server"

import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

export const postTodo = async(userId:string, content:string) =>{
    const user = await getUserById(userId)
    return  db.todo.create({
        data:{
            content: content,
            userId: userId,
        }
    })

}