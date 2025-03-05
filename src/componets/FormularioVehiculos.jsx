import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Mensaje from "./Alertas/Mensaje";

export const FormularioVehiculo = ({vehiculo}) => {

    const navigate = useNavigate()
    const [mensaje, setMensaje] = useState({})
    const [form, setform] = useState({
        marca: vehiculo?.marca ??"",
        modelo: vehiculo?.modelo ||"",
        anio: vehiculo?.anio ??"",
        placa: vehiculo?.placa ??"",
        color:  new Date(vehiculo?.color).toLocaleDateString('en-CA', {timeZone: 'UTC'}) || "",
        tipo_vehiculo: vehiculo?.tipo_vehiculo ??"",
        kilometraje: vehiculo?.kilometraje ??"",
        descripcion: vehiculo?.descripcion ??"",
    })

    const handleChange = (e) => {
        setform({...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) => { 
        e.preventDefault()

        if (vehiculo?._id) {
            const token = localStorage.getItem('token')
            const url = `${import.meta.env.VITE_BACKEND_URL}/vehiculo/actualizar/${vehiculo?._id}`
            const options = {
                headers: {
                    method: 'PUT',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            await axios.put(url, form, options)
            navigate('/dashboard/listar')
        }
        else {
        try {
            const token = localStorage.getItem('token')
            const url = `${import.meta.env.VITE_BACKEND_URL}/vehiculo/registro`
            const options={
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            await axios.post(url,form,options)
						setMensaje({ respuesta:"vehiculo registrado con exito y correo enviado", tipo: true })
            setTimeout(() => {
                navigate('/dashboard/listar');
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
                    htmlFor='marca:'
                    className='text-gray-700 uppercase font-bold text-sm'>Marca: </label>
                <input
                    id='marca'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='marca de la mascota'
                    name='marca'
                    value={form.marca || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='modelo:'
                    className='text-gray-700 uppercase font-bold text-sm'>Modelo: </label>
                <input
                    id='modelo'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='nombre del modelo'
                    name='modelo'
                    vavalue={form.modelo || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='anio:'
                    className='text-gray-700 uppercase font-bold text-sm'>Año: </label>
                <input
                    id='anio'
                    type="anio"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='anio_fabricacion del propietario'
                    name='anio'
                    value={form.anio || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='placa:'
                    className='text-gray-700 uppercase font-bold text-sm'>Placa: </label>
                <input
                    id='placa'
                    type="number"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='placa del propietario'
                    name='placa'
                    value={form.placa}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='color:'
                    className='text-gray-700 uppercase font-bold text-sm'>Color: </label>
                <input
                    id='color'
                    type="number"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='color del propietario'
                    name='color'
                    value={form.color}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='tipo_vehiculo:'
                    className='text-gray-700 uppercase font-bold text-sm'>Tipo Vehiculo: </label>
                <input
                    id='tipo_vehiculo'
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='tipo_vehiculo'
                    name='tipo_vehiculo'
                    value={form.tipo_vehiculo}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='kilometraje:'
                    className='text-gray-700 uppercase font-bold text-sm'>Kilometraje: </label>
                <textarea
                    id='kilometraje'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='Ingrese los síntomas de la mascota'
                    name='kilometraje'
                    value={form.kilometraje}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label
                    htmlFor='descripcion:'
                    className='text-gray-700 uppercase font-bold text-sm'>Descripción: </label>
                <textarea
                    id='descripcion'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='Ingrese los síntomas de la mascota'
                    name='descripcion'
                    value={form.descripcion}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className='bg-gray-600 w-full p-3 
                    text-slate-300 uppercase font-bold rounded-lg 
                    hover:bg-gray-900 cursor-pointer transition-all'
                    value={vehiculo?._id ? 'Actualizar vehiculo' : 'Registrar vehiculo'} />

        </form>
    )
}