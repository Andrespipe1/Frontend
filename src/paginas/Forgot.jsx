import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Mensaje from '../componets/Alertas/Mensaje';

export const Forgot = () => {
    const [mensaje, setMensaje] = useState({});
    const [mail, setMail] = useState({});

    const handleChange = (e) => {
        setMail({
            ...mail,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/recuperar-password`;
            const respuesta = await axios.post(url, mail);
            setMensaje({ respuesta: respuesta.data.msg, tipo: true });
            setMail("");
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false });
        }
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-r from-green-300 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg w-[1000px] md:w-[600px] md:h-[400px] p-8 md:p-10">
                {Object.keys(mensaje).length > 0 && (
                    <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
                )}

                <h1 className="text-3xl font-semibold mb-2 text-center uppercase bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                    Recupera tu contraseña
                </h1>
                <small className="text-red-700 block my-4 text-sm">
                    No te preopcupes, te enviaremos un correo para que puedas recuperar tu contraseña
                </small>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            className="block w-full rounded-md border border-gray-300 focus:border-black-700 focus:outline-none focus:ring-1 focus:ring-black-700 py-2 px-3 text-gray-500"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>

                    <button className="bg-gradient-to-r from-green-400 to-blue-600 text-white py-3 w-full rounded-lg mt-4 hover:scale-105 duration-300 hover:bg-gray-900">
                        Enviar email
                    </button>
                </form>

                <div className="mt-5 text-sm flex justify-between items-center">
                    <p>Ya recordaste tu contraseña?</p>
                    <Link
                        to="/login"
                        className="py-2 px-6 bg-gradient-to-r from-green-400 to-blue-600 text-white rounded-lg hover:scale-110 duration-300 hover:bg-gray-900"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};
