import db from '../database/connection';

class ToDoService {

    async create(title) {
        const todo = await db("todo").insert( {
            title,
        }).returning("*");
        return todo;
    }
}

export const todoService = new ToDoService();