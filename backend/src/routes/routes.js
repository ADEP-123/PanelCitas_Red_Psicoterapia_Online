import { Router } from "express";
import loginInitRoute from "./loginData.js"
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import deleteInitRoute from "./deleteData.js";
import { middlewareValidLog } from "./middleware/jwtdmiddleware.js";

const initApiRoutes = () => {
    const router = Router();
    router.use("/login", loginInitRoute())
    router.use("/get", middlewareValidLog, getInitRoute())
    router.use("/post", middlewareValidLog, postInitRoute())
    router.use("/put", middlewareValidLog, putInitRoute())
    router.use("/delete", middlewareValidLog, deleteInitRoute())
    return router
}

export default initApiRoutes;