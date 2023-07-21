import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./putData.js";
import deleteInitRoute from "./deleteData.js";

const initApiRoutes = () => {
    const router = Router();
    router.use("/get", getInitRoute())
    router.use("/post", postInitRoute())
    router.use("/put", putInitRoute())
    router.use("/delete", deleteInitRoute())
    return router
}

export default initApiRoutes;