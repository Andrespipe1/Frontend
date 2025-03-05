import { Link } from 'react-router-dom'
import { useState } from "react"
import Mensaje from '../componets/Alertas/Mensaje'
import axios from 'axios';

export const Register = () => {

    // Paso 1
    const [mensaje, setMensaje] = useState({})

    const [form, setform] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setform({...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) => { 
        e.preventDefault()
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/registro`
            const respuesta = await axios.post(url,form)
            setMensaje({respuesta:respuesta.data.msg,tipo:true})
            setform({})
        } catch (error) {
            setMensaje({respuesta:error.response.data.msg,tipo:false})
        }
    }


    return (
        <>
            <div className="w-1/2 h-screen bg-gradient-to-r from-green-400 to-blue-600
            ">
                <div className="w-1/2 absolute inset-0 flex flex-col justify-center items-center text-white px-12 py-16">
                        <h2 className="text-4xl font-bold mb-10 text-white text-center leading-tight">
                            Sistema de monitoreo de salud
                        </h2>
                        <ul className="space-y-6 text-lg">
                            <li className="flex items-center gap-4">
                                <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                                    <span className="text-green-300 text-xl">✔</span>
                                </span>
                                <span className="text-white">Monitoreo 24/7</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                                    <span className="text-green-300 text-xl">✔</span>
                                </span>
                                <span className="text-white">
                                    Recomendaciones basadas en tus datos
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                                    <span className="text-green-300 text-xl">✔</span>
                                </span>
                                <span className="text-white">Asistente inteligente de salud</span>
                            </li>
                        </ul>
                    </div>
            </div>

            <div className="bg-white flex justify-center items-center w-1/2">
                <div className="md:w-4/5 sm:w-full">
                    {Object.keys(mensaje).length>0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">BIENVENIDO</h1>
                    <small className="text-gray-400 block my-4 text-sm">Ingresa tus datos</small>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold" htmlFor="nombre">Nombre:</label>

                            <input type="text" id="nombre" name='nombre'
                            value={form.nombre || ""} onChange={handleChange}
                            placeholder="Ingresa tu nombre" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                            
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold" htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name='apellido'
                            value={form.apellido || ""} onChange={handleChange}
                            placeholder="Ingresa tu apellido" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold" htmlFor="direccion">Dirección</label>
                            <input type="text" id="direccion" name='direccion'
                            value={form.direccion || ""} onChange={handleChange}
                            placeholder="Ingresa tu dirección" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold" htmlFor="telefono">Teléfono:</label>
                            <input type="tel" id="telefono"  name='telefono'
                            value={form.telefono || ""} onChange={handleChange}
                            placeholder="Ingresa tu teléfono" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold" htmlFor="email">Email:</label>
                            <input type="email" id="email" name='email'
                            value={form.email || ""} onChange={handleChange}
                            placeholder="Ingresa tu email" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold" htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name='password'
                            value={form.password || ""} onChange={handleChange}
                            placeholder="********************" className="block w-full rounded-md border border-gray-300 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500" required />
                        </div>

                        <div className="mb-3">
                            <button className="bg-gradient-to-r from-green-400 to-blue-600 text-white border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white">Registrarse
                            </button>
                        </div>
                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 "></div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>Ya tienes una cuenta?</p>
                        <Link to="/login" className="py-2 px-8 bg-gradient-to-r from-green-400 to-blue-600 text-white border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 ">Login</Link>
                    </div>


                </div>

            </div>

        </>
    )
}
