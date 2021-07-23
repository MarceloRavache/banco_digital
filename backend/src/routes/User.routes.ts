import { Router } from "express";
import { createUser, getUsers, updateUser } from "../controllers/User.controller";

const UserRoutes = Router();

UserRoutes.get("/users",getUsers);
UserRoutes.post("/users",createUser);
UserRoutes.put("/users/:id",updateUser);

export default UserRoutes;