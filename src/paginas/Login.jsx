import axios from 'axios'
import { useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Mensaje from '../componets/Alertas/Mensaje'
import AuthContext from '../context/AuthProvider'

const Login = () => {
    const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext)
    const [mensaje, setMensaje] = useState({})
    const [form, setform] = useState({
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
        const url = form.password.includes("vet")
            ? `${import.meta.env.VITE_BACKEND_URL}/paciente/login`
            : `${import.meta.env.VITE_BACKEND_URL}/login`

        try {
            const respuesta= await axios.post(url,form)
            localStorage.setItem('token',respuesta.data.token)
            setAuth(respuesta.data)
            navigate('/dashboard')
        } catch (error) {
            setMensaje({respuesta:error.response.data.msg,tipo:false})
            setform({})
            setTimeout(() => {
                setMensaje({})
            }, 3000);
        }
    }

    return (
        <>
            <div className="w-1/2 h-screen bg-[url('/public/images/carrologin.png')] 
            bg-no-repeat bg-cover bg-center sm:block hidden
            ">
            </div>

            <div className="w-1/2 h-screen bg-white flex justify-center items-center">
                
                <div className="md:w-4/5 sm:w-full">
                    {Object.keys(mensaje).length>0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Bienvenido</h1>
                    <small className="text-gray-400 block my-4 text-sm">Bienvenido de nuevo, ingresa tus credenciales</small>


                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Email</label>
                            <input type="email" placeholder="Ingresa tu email" 
                            name='email'
                            value={form.email || ""} onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 focus:border-black-700 focus:outline-none focus:ring-1 focus:ring-black-900 py-1 px-2 text-gray-500" />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Contraseña</label>
                            <input type="password" placeholder="********************" 
                            name='password'
                            value={form.password || ""} onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 focus:border-black-700 focus:outline-none focus:ring-1 focus:ring-black-700 py-1 px-2 text-gray-500" />
                        </div>

                        <div className="my-4">
                            <button className="py-2 w-full block text-center bg-orange-400 text-white border rounded-xl hover:scale-105 duration-300">Login</button>
                        </div>

                    </form>

                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm"></p>
                        <hr className="border-gray-400" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Login