import axios from "axios"
import router from "@/router/router";

export const obtenerUsuarioFachada = async (cedula) => {
    return await obtenerEstudianteAPI(cedula);
}

export const ingresarUsuarioFachada = async (bodyUsuario) => {
    return await ingresarUsuario(bodyUsuario);
}

export const loginUsuarioFachada = async (bodyCredenciales) => {
    return await loginUsuario(bodyCredenciales);
}

export const actualizarEstudianteFachada = (bodyUsuario, id) => {

}

export const eliminarEstudianteFachada = (id) => {

}


export const consultarTodosUsuariosFachada = async() => {
    return await consultarTodosUsuarios();
}


const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data
}

const obtenerEstudianteAPIAxios = (cedula) => {

}

const loginUsuario = async (bodyCredenciales) => {
    let booleano = false;
    await axios.post(`http://localhost:8081/API/V1.0/Tutoria/authUsuarios`, bodyCredenciales).then((r) => {
        r.data
        // Si el inicio de sesión es exitoso, redirige a la siguiente página
        console.log("Inicio de sesion correcto " + r.data)
        router.push("/"); // Asumiendo que '/dashboard' es la ruta de la siguiente página
    })
        .catch((error) => {
            console.error("Error al iniciar sesión:", error);
            // Si el inicio de sesión falla, muestra un mensaje de error

            booleano = true;
        });
    return booleano;
}

const ingresarUsuario = async (bodyUsuario) => {
    let booleano = false;
    await axios.post(`http://localhost:8081/API/V1.0/Tutoria/usuarios`, bodyUsuario).then((r) => {
        r.data;
        console.log("Datos Registro correctos: " + r.data);

        router.push("/login"); // Asumiendo que '/dashboard' es la ruta de la siguiente página
    })
        .catch((error) => {
            console.error("Error registrarse:", error);
            booleano = true;
        });
        return booleano;
}


const consultarTodosUsuarios = async () => {
    const data = axios.get(`http://localhost:8081/API/V1.0/Tutoria/usuarios`).then(r => r.data);
    console.log(data);
    return data;
}