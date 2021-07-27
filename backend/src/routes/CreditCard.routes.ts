import { Router } from "express";
import { getCreditCard } from "../controllers/CreditCard.controller";
import { userRoute } from "../middlewares/Authentication.middleware";

const router = Router();

router.get("/card", userRoute, getCreditCard);

export default router;
