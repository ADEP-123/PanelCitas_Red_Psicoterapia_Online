import executeQuery from "../utils/db.js";

class Genero {
    gen_id;
    gen_nombre;
    gen_abreviatura;
    constructor(id, nombre, abreviatura) {
        this.gen_id = id;
        this.gen_nombre = nombre;
        this.gen_abreviatura = abreviatura;
    }

    async postGenero() {
        let sql = /*sql*/`
            INSERT INTO genero (gen_nombre, gen_abreviatura)
            VALUES (
                \'${this.gen_nombre}\',
                \'${this.gen_abreviatura}\'
            )`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}


export default Genero;