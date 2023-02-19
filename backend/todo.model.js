import {Schema, model} from "mongoose";

const todoSchema = new Schema({
    "task" : {type:String, required: true},
    "status": {type:String, required: true, enum: ['To Do', 'In Progress', 'Done']}
});

const todoModel = model('ToDoList', todoSchema);

export {todoModel};
