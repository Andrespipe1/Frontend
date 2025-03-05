import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const location = useLocation();
    const urlActual = location.pathname;
    const { auth } = useContext(AuthContext);
    const [menuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () => setMenuVisible(!menuVisible);

    return (
        <div className='md:flex md:min-h-screen'>
            {/* Sidebar con animación */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: menuVisible ? 0 : -250 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={`md:w-1/5 bg-white shadow-md p-6 fixed h-full z-10 ${menuVisible ? '' : 'pointer-events-none'}`}
            >
                <h2 className='text-3xl font-bold text-center text-gray-700 mb-6'>RENTAMOTORS</h2>
                <hr className='my-5 border-gray-300' />
                <ul className='space-y-4'>
                    <li className='text-center'>
                        <Link to='/dashboard/clientes' className={`${urlActual === '/dashboard/clientes' ? 'bg-purple-700 text-white' : 'text-gray-600'} text-xl block py-3 rounded-lg hover:bg-purple-200`}>
                            Clientes
                        </Link>
                    </li>
                    <li className='text-center'>
                        <Link to='/dashboard/vehiculos' className={`${urlActual === '/dashboard/vehiculos' ? 'bg-purple-700 text-white' : 'text-gray-600'} text-xl block py-3 rounded-lg hover:bg-purple-200`}>
                           Vehiculos
                        </Link>
                    </li>
                    <li className='text-center'>
                        <Link to='/dashboard/reservas' className={`${urlActual === '/dashboard/reservas' ? 'bg-purple-700 text-white' : 'text-gray-600'} text-xl block py-3 rounded-lg hover:bg-purple-200`}>
                            Reservas
                        </Link>
                    </li>
                </ul>
                <p className='text-center text-black mt-6 text-sm'></p>
            </motion.div>

            {/* Main Content */}
            <div className='flex-1 flex flex-col justify-between h-screen bg-gray-100 ml-auto' style={{ marginLeft: menuVisible ? '20%' : '0' }}>
                {/* Header con botón de menú */}
                <div className='bg-gradient-to-r from-green-400 to-blue-600 py-3 flex items-center gap-5 px-6'>
                    <button onClick={toggleMenu} className='text-white'>
                        <Menu size={32} />
                    </button>
                    <div className='text-md font-semibold text-white'>
                        Bienvenido - {auth?.nombre}
                    </div>
                    <div>
                        <img 
                            src='https://cdn-icons-png.flaticon.com/512/4715/4715329.png' 
                            alt='img-client' 
                            className='border-2 border-green-500 rounded-full' 
                            width={50} 
                            height={50} 
                        />
                    </div>
                    <div>
                        <Link 
                            to='/' 
                            className='text-white text-md block hover:bg-red-900 bg-red-700 px-4 py-2 rounded-lg'
                            onClick={() => { localStorage.removeItem('token'); }}
                        >Salir</Link>
                    </div>
                </div>

                {/* Content */}
                <div className='overflow-y-scroll px-20'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-6'>Panel de Control</h1>
                    <p className='text-gray-500 mb-6'>Bienvenido de vuelta. Aquí está un resumen de tu salud.</p>

                    <div className='grid grid-cols-4 gap-4 mb-6'>
                        <div className='bg-white shadow-md rounded-lg p-4'>
                            <p className='text-sm text-gray-500'>Frecuencia Cardíaca</p>
                            <h2 className='text-2xl font-bold'>72 BPM</h2>
                            <p className='text-xs text-gray-400'>Último registro</p>
                        </div>
                        <div className='bg-white shadow-md rounded-lg p-4'>
                            <p className='text-sm text-gray-500'>Actividad Física</p>
                            <h2 className='text-2xl font-bold'>2,345 pasos</h2>
                            <p className='text-xs text-gray-400'>Hoy</p>
                        </div>
                        <div className='bg-white shadow-md rounded-lg p-4'>
                            <p className='text-sm text-gray-500'>Nivel de Estrés</p>
                            <h2 className='text-2xl font-bold'>Bajo</h2>
                            <p className='text-xs text-gray-400'>Basado en actividad</p>
                        </div>
                        <div className='bg-white shadow-md rounded-lg p-4'>
                            <p className='text-sm text-gray-500'>Peso</p>
                            <h2 className='text-2xl font-bold'>75 kg</h2>
                            <p className='text-xs text-gray-400'>Última medición</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='bg-white shadow-md rounded-lg p-6'>
                            <h3 className='text-xl font-semibold mb-4'>Tendencias de Salud</h3>
                            <p className='text-sm text-gray-400'>Gráfico de tendencias (Próximamente)</p>
                        </div>
                        <div className='bg-white shadow-md rounded-lg p-6'>
                            <h3 className='text-xl font-semibold mb-4'>Recomendaciones</h3>
                            <div className='mb-4'>
                                <p className='font-medium'>Gestión del Estrés</p>
                                <p className='text-sm text-gray-500'>Considere tomar descansos regulares durante el día</p>
                            </div>
                            <div>
                                <p className='font-medium'>Actividad Física</p>
                                <p className='text-sm text-gray-500'>Intenta caminar 30 minutos más hoy</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className='bg-gradient-to-r from-green-400 to-blue-600 h-12 flex items-center justify-center'>
                    <p className='text-center text-white text-sm'>Todos los derechos reservados - Saludify ©</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
