import express, {urlencoded, json} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { todoController } from './todo.controller.js';
import {config} from 'dotenv';

config();
const { URI } = process.env;

const app = express();
app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors());
app.use('/', todoController);

const PORT = process.env.PORT || 8080;

mongoose.set('strictQuery', true);
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(res => console.log(`Connected to Database`))
.catch(err => console.log(`Failed to Connect`))

app.listen(PORT,()=> console.log(`Listening to http://localhost:${PORT}`));
