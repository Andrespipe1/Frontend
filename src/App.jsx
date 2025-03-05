import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './layout/Auth'
import Login from './paginas/Login'
import { LandinPage } from './paginas/LandinPage'
import { NotFound } from './paginas/NotFound'
import Dashboard from './layout/Dashboard'
import Actualizar from './paginas/Actualizar'
import { AuthProvider } from './context/AuthProvider'
import Cliente from './paginas/Clientes'
import PrivateRoute from './routes/PrivateRoute'
import Vehiculo from './paginas/Vehiculos'





function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
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
                    <Route index/>
                    
                    <Route path='clientes' element={<Cliente />} />
                    <Route path='vehiculo' element={<Vehiculo />} />
                    <Route path='reserva' element={<Vehiculo/>} />
                    <Route path='actualizar/:id' element={<Actualizar />} />
                  </Route>
                </Routes>
              </PrivateRoute>
            } />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
