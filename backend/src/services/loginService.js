import Login from "../entities/login.js";

const testlogin = async (id, pass) => {
    const login = new Login(id, pass);
    const result = await login.testLogin();
    return result;
}

export { testlogin }