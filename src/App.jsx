import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './layout/Auth'
import Login from './paginas/Login'
import { LandinPage } from './paginas/LandinPage'
import { NotFound } from './paginas/NotFound'
import Dashboard from './layout/Dashboard'
import Visualizar from './paginas/Visualizar'
import Actualizar from './paginas/Actualizar'
import { AuthProvider } from './context/AuthProvider'
import { PrivateRoute } from './routes/PrivateRoute'
import { TratamientosProvider } from './context/TratamientosProvider'
import PrivateRouteWithRole from './routes/PrivateRouteWithRole'
import Cliente from './paginas/Clientes'




function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <TratamientosProvider>
          <Routes>

            <Route index element={<LandinPage />} />


            <Route path='/' element={<Auth />}>
              <Route path='login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='dashboard/*' element={
              <PrivateRoute>
                <Routes>
                  <Route element={<Dashboard />}>
                    <Route path='clientes' element={<Cliente />} />
                    <Route path='vehiculo' element={<Visualizar />} />
                    <Route path='reserva' element={
                      <PrivateRouteWithRole></PrivateRouteWithRole>
                      } />
                    <Route path='actualizar/:id' element={<Actualizar />} />
                  </Route>
                </Routes>
              </PrivateRoute>
            } />

          </Routes>
          </TratamientosProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
