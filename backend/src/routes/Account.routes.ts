import { Router } from "express";
import { getAccount } from "../controllers/Account.controller";
import { userRoute } from "../middlewares/Authentication.middleware";

const router = Router();

router.get("/account", userRoute, getAccount);

export default router;
