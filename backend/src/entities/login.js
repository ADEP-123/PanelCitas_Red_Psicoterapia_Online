import executeQuery from "../utils/db.js";

class Login {
    idCuenta;
    passCuenta;
    constructor(id, pass) {
        this.idCuenta = id;
        this.passCuenta = pass;
    }

    async testLogin() {
        let sql = /*sql*/`
          SELECT COUNT(*) AS count
          FROM usuarios
          WHERE idCuenta = \'${this.idCuenta}\'
          AND passCuenta = \'${this.passCuenta}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data[0];
        } catch (error) {
            throw error;
        }
    }
}


export default Login;