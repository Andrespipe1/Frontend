import FormularioCliente from "../componets/FormularioCliente";
import AuthContext from "../context/AuthProvider";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const Clientes = () => {
    const { auth } = useContext(AuthContext);
    const [clientes, setClientes] = useState(null);

    useEffect(() => {
        const obtenerCliente = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const { data } = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/clientes`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );

                setClientes(data);
            } catch (error) {
                console.error("Error al obtener clientes:", error);
            }
        };

        obtenerCliente();
    }, []);

    return (
        <>       
            <div>
                <h1 className='font-black text-4xl text-gray-500'>Clientes</h1>
                <hr className='my-4' />
                <p className='mb-8'>Este módulo te permite registrar clientes</p>
            </div>

            <div className='flex justify-around gap-x-8 flex-wrap gap-y-8 md:flex-nowrap'>
                <div className='w-full md:w-1/2'>
                    {/* Pasa los datos del cliente al formulario */}
                    <FormularioCliente clientes={clientes} />
                </div>
                <div className='w-full md:w-1/2'>
                    {/* Aquí puedes mostrar más información */}
                </div>
            </div>
        </>
    );
};

export default Clientes;
