import {Schema, model} from "mongoose";

const todoSchema = new Schema({
    "title" : {type:String, required: true},
    "status": {type:String, enum: ['To Do', 'In Progress', 'Done']}
});

const todoModel = model('ToDoList', todoSchema);

export default todoModel;
