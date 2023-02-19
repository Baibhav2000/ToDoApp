import { Router } from "express";
import mongoose from "mongoose";
import {todoModel} from "./todo.model.js";
import {config} from 'dotenv';

config();

mongoose.set('strictQuery', true);
const todoController = Router();
const { URI } = process.env;

todoController.get('/todos', async (req,res)=>{
    try{
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const result = await todoModel.find({});
        res.json({"status": 200, "result": result});
    }
    catch(err){
        res.send(err);
    }
    finally{
        mongoose.disconnect();
    }
});

todoController.post('/add', async (req,res)=>{
    try{
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const {task, status} = req.body;
        const newTodo = new todoModel({
            task, status
        });
        await newTodo.save();
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.json({'message': 'Added New Task Successfully'});
    }
    catch(err){
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(err);
    }
    finally{
        mongoose.disconnect();
    }
});

export {todoController};