import "reflect-metadata";

import express from "express";
import cors from 'cors';
import morgan from 'morgan';

import { createConnection } from "typeorm";

import UserRoutes from "./routes/User.routes";

const app = express();
createConnection();

//express configs
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(UserRoutes);

export default app;
