import express from "express";
import { jwtVerify } from "jose";
const middlewareValidLog = express();
middlewareValidLog.use(async (req, res, next) => {
    const authorization = req.cookies.User
    if (!authorization) return res.status(401).send({ token: "token de autorizacion no proporcionado" });
    try {
        res.cookie('User', authorization, { maxAge: 600000, httpOnly: true });
        const encoder = new TextEncoder();
        const jwData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        const rol = jwData.payload.json.rol;
        if (rol == "psicologo") {
            next()
        } else {
            res.status(401).send({ message: "su usuario no esta autorizado para esta consulta" });
        }
        // res.clearCookie('User')
    } catch (error) {
        res.status(401).send({ token: "Algo salio mal" });
    }
})

export { middlewareValidLog }