import express, {urlencoded, json} from 'express';
import { todoController } from './todo.controller.js';
import cors from 'cors';

const app = express();
app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use('/', todoController);

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=> console.log(`Listening to http://localhost:${PORT}`));
