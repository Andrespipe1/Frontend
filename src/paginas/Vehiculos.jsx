import FormularioVehiculos from "../componets/FormularioVehiculos";

const Vehiculo = () => {

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
                    <FormularioVehiculos/>
                </div>
                <div className='w-full md:w-1/2'>
                    {/* Aquí puedes mostrar más información */}
                </div>
            </div>
        </>
    );
};

export default Vehiculo;
