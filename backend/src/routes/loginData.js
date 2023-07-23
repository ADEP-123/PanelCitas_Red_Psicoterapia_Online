import { Router } from "express";
import { loginDataController } from "../controllers/loginDataController.js";

const getInitRoute = () => {
    const router = Router()
    router.post("/", loginDataController)
    return router;
};

export default getInitRoute