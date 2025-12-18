import axios from "axios";

const obtenerUsuario = async () => {
    const respuesta = axios.get("https://randomuser.me/api/").then(r => r.data);
    return respuesta;
}

export async function obtenerUsuarioFachada() {
    return await obtenerUsuario();
}