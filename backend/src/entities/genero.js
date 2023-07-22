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

    async getAllGeneros() {
        let sql = /*sql*/`
            SELECT
                gen_id as id,
                gen_nombre as nombre,
                gen_abreviatura as abreviatura
            FROM genero`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async getGeneroById() {
        let sql = /*sql*/`
            SELECT
                gen_id as id,
                gen_nombre as nombre,
                gen_abreviatura as abreviatura
            FROM genero
            WHERE gen_id = \'${this.gen_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data[0];
        } catch (error) {
            throw error;
        }
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

    async putGenero() {
        let sql = /*sql*/`
            UPDATE genero
            SET
                gen_nombre = \'${this.gen_nombre}\',
                gen_abreviatura = \'${this.gen_abreviatura}\'
            WHERE gen_id = \'${this.gen_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    async deleteGenero() {
        let sql = /*sql*/`
            DELETE FROM genero
            WHERE gen_id = \'${this.gen_id}\'`;
        try {
            const result = await executeQuery(sql);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}


export default Genero;