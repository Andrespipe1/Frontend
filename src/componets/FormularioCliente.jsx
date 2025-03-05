import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Mensaje from "./Alertas/Mensaje";

const FormularioCliente = ({clientes}) => {

    const navigate = useNavigate()
    const [mensaje, setMensaje] = useState({})
    const [form, setform] = useState({
        cedula: clientes?.cedula ||"",
        nombre: clientes?.nombre ??"",
        apellido: clientes?.apellido ??"",
        ciudad: clientes?.ciudad ||"",
        email: clientes?.email ??"",
        direccion: clientes?.direccion ??"",
        telefono: clientes?.telefono ??"",
        fecha_nacimiento: clientes?.fecha_nacimiento ??""
    })

    const handleChange = (e) => {
        setform({...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) => { 
        e.preventDefault()

        if (clientes?._id) {
            const token = localStorage.getItem('token')
            const url = `${import.meta.env.VITE_BACKEND_URL}/actualizar-clientes/${clientes?._id}`
            const options = {
                headers: {
                    method: 'PUT',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            await axios.put(url, form, options)
            navigate('/dashboard/clientes')
        }
        else {
        try {
            const token = localStorage.getItem('token')
            const url = `${import.meta.env.VITE_BACKEND_URL}/registrar-cliente`
            const options={
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            await axios.post(url,form,options)
						setMensaje({ respuesta:"clientes registrado con exito", tipo: true })
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);
        } catch (error) {
						setMensaje({ respuesta: error.response.data.msg, tipo: false })
            setTimeout(() => {
                setMensaje({})
            }, 3000);
        }
    }
    }

    return (
        
        <form onSubmit={handleSubmit}>
            {Object.keys(mensaje).length>0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}

            <div>
                <label
                    htmlFor='cedula:'
                    className='text-gray-700 uppercase font-bold text-sm'>Cedula: </label>
                <input
                    id='cedula'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='170000000'
                    name='cedula'
                    value={form.cedula || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='nombre:'
                    className='text-gray-700 uppercase font-bold text-sm'>Nombre: </label>
                <input
                    id='nombre'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='nombre'
                    name='nombre'
                    value={form.nombre || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='propietario:'
                    className='text-gray-700 uppercase font-bold text-sm'>Apellido: </label>
                <input
                    id='apellido'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='Apellido'
                    name='apellido'
                    vavalue={form.apellido || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='ciudad:'
                    className='text-gray-700 uppercase font-bold text-sm'>Ciudad: </label>
                <input
                    id='ciudad'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='ciudad'
                    name='ciudad'
                    value={form.ciudad || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='email:'
                    className='text-gray-700 uppercase font-bold text-sm'>Email: </label>
                <input
                    id='email'
                    type="email"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='direccion:'
                    className='text-gray-700 uppercase font-bold text-sm'>Direccion: </label>
                <textarea
                    id='direccion'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='Direccion'
                    name='direccion'
                    value={form.direccion}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label
                    htmlFor='convencional:'
                    className='text-gray-700 uppercase font-bold text-sm'>Convencional: </label>
                <input
                    id='telefono'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='Telf'
                    name='telefono'
                    value={form.telefono}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='fecha_nacimiento:'
                    className='text-gray-700 uppercase font-bold text-sm'>Fecha nacimiento: </label>
                <textarea
                    id='fecha_nacimiento'
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='fecha_nacimiento'
                    name='fecha_nacimiento'
                    value={form.fecha_nacimiento}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className='bg-gray-600 w-full p-3 
                    text-slate-300 uppercase font-bold rounded-lg 
                    hover:bg-gray-900 cursor-pointer transition-all'
                    value={clientes?._id ? 'Actualizar clientes' : 'Registrar clientes'} />

        </form>
    )
}
export default FormularioCliente