import { todoService } from '../services/todoServices';

class ToDoController {

    getAllTodos(req, res) {

    }

    async createTodo(req, res) {
        const { title } = req.body;
        const todo = await todoService.create(title);
        return res.status(201).json({ message: "Created Successfully", todo });
    }
}

export const todoController = new ToDoController();
