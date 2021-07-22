import { Router } from "express";
import { CreateUser } from "../../controllers/User/CreateUser.controller";
import { GetUser } from "../../controllers/User/GetUser.controller";
import { UpdateUser } from "../../controllers/User/Update.controller";

const UserRoutes = Router();

UserRoutes.get("/users/:id",GetUser);
UserRoutes.post("/users",CreateUser);
UserRoutes.put("/users/:id",UpdateUser);

export default UserRoutes;