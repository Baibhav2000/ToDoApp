import { Router } from "express";
import {todoModel} from "./todo.model.js";

const todoController = Router();

todoController.get('/todos', (req,res)=>{
    todoModel.find({})
    .then(resp => res.send(resp))
    .catch(err => console.log(err));
});

todoController.post('/add', (req,res)=>{
    const {task, status} = req.body;
    const newTodo = new todoModel({
        task, status
    });
    newTodo.save()
    .then(resp => res.send({"message": "Added new task successfully"}))
    .catch(err => console.log(err));
});

export {todoController};