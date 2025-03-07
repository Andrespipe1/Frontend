import logoDarkMode from '../assets/dark.png';
import logoFacebook from '../assets/facebook.png';
import logoGithub from '../assets/github.png';
import logoLinkedind from '../assets/linkedin.png';
import logoSalud from '../assets/logocarro.jpg';
import logoCode from '../assets/code.png';
import logoConsulting from '../assets/consulting.png';
import logoDesign from '../assets/design.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LandinPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className='bg-[#F5F5F5] px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
                <section className='bg-[#F5F5F5] px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
                    <nav className='p-6 flex justify-between items-center'>
                        <h1 className='text-black leading-none pb-1 dark:text-orange-400'>RENTAMOTORS</h1>
                        <ul className='flex items-center gap-6'>
                            <li>
                                <img 
                                    onClick={() => setDarkMode(!darkMode)} 
                                    className='cursor-pointer w-0 h-0 transition duration-300 transform hover:scale-110' 
                                    src={logoDarkMode} 
                                    alt="logo dark mode" 
                                />
                            </li>
                        </ul>
                    </nav>

                    <div className='text-center pt-16'>
                    <h2 className="text-5xl text-orange-400 leading-none pb-1 mb-4 md:text-6xl dark:text-orange-400 w-fit">
                          RESERVA DE VEHICULOS RENTAMOTORS ADMIN </h2>

                        <h3 className='text-2xl text-gray-800 dark:text-gray-200 mb-6 md:text-3xl font-medium'>
                    
                        </h3>
                        <p className='text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto mb-6 leading-relaxed md:text-xl'>
                            "Sistema de gestion de clientes y reservas."
                            <br />
                        </p>

                        <Link 
                            to="/login" 
                            className='bg-orange-400 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-500 hover:shadow-lg mt-6 inline-block dark:bg-orange-400 dark:hover:bg-orange-500'>
                            Login
                        </Link>
                    </div>

                    <div className='relative mx-auto mt-12 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-b from-green-400 to-green-600 rounded-full overflow-hidden shadow-lg dark:from-orange-300 dark:to-orange-500'>
                        <img 
                            src={logoSalud} 
                            alt="logo-salud" 
                            className='w-full h-full object-cover transition-all duration-500 transform hover:scale-110'
                        />
                    </div>
                </section>

                <section>
                    <div>
                        <h3 className='text-3xl py-1 text-gray-800 dark:text-gray-200'>Servicios Ofrecidos</h3>
                        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
                            
                        </p>
                    </div>

                    <div className='md:flex md:flex-wrap lg:flex lg:justify-center gap-10'>
                        <ServiceCard 
                            icon={logoCode} 
                            title="CRUD CLIENTES" 
                            description="LLeva control de clientes nuevos"
                        />
                        <ServiceCard 
                            icon={logoConsulting} 
                            title="CRUD VEHICULOS" 
                            description="Lleva control de los vehiculos de la empresa."
                        />
                        <ServiceCard 
                            icon={logoDesign} 
                            title="CRUD RESERVAS" 
                            description="Planifica reservas de clientes."
                        />
                    </div>
                </section>

                <div className='text-5xl flex justify-center gap-16 py-3'>
                    <img src={logoFacebook} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-green-300 rounded-full dark:border-orange-300'}/>
                    <img src={logoGithub} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-green-300 rounded-full dark:border-orange-300'}/>
                    <img src={logoLinkedind} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-green-300 rounded-full dark:border-orange-300'}/>
                </div>
            </main>
        </div>
    );
};

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 bg-white dark:bg-gray-800'>
            <img className='mx-auto' src={icon} alt="" />
            <h3 className='text-lg font-medium pt-8 pb-2 text-green-600 dark:text-orange-400'>{title}</h3>
            <p className='py-4 text-gray-800 dark:text-gray-200'>{description}</p>
        </div>
    );
};