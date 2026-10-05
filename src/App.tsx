import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import './Components/Pages/Login/Login.css';
import Layout from './Components/Layout/Layout'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Product from './Components/Pages/Product/Product'
import PropertyDetails from './Components/Pages/Product/PropertyDetails/PropertyDetails'
import User from './Components/Pages/Users/Users'
import UserDetail from './Components/Pages/Users/UserDetail/UserDetail'
import Order from './Components/Pages/Order/Order';
import Analytics from './Components/Pages/Analytics/Analytics'
import Setting from './Components/Pages/Setting/Setting'
import Login from './Components/Pages/Login/Login'
import ThemeContext from './Context/ThemeContext'
import ThemeContextBar from './Context/ThemeContextBar'
import { useState } from 'react'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

function App() {
  const [ theme, setTheme ] = useState<string>("light");
  const [ sidbar, setsidbar ] = useState<string>("out");
  const [ iconsidbar, seticonsidbar ] = useState<string>("out");
  return (
    <div className={`appDiv ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeContextBar.Provider value={{ sidbar, setsidbar,iconsidbar, seticonsidbar}}>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Dashboard" element={<ProtectedRoute><Layout><Dashboard/></Layout></ProtectedRoute>} />
                <Route path="/Products" element={<ProtectedRoute><Layout><Product/></Layout></ProtectedRoute>} />
                <Route path="/Products/:id" element={<ProtectedRoute><Layout><PropertyDetails/></Layout></ProtectedRoute>} />
                <Route path="/Users" element={<ProtectedRoute><Layout><User/></Layout></ProtectedRoute>} />
                <Route path="/Users/:id" element={<ProtectedRoute><Layout><UserDetail /></Layout></ProtectedRoute>} />
                <Route path="/Orders" element={<ProtectedRoute><Layout><Order /></Layout></ProtectedRoute>} />
                <Route path="/Analytic" element={<ProtectedRoute><Layout><Analytics /></Layout></ProtectedRoute>} />
                <Route path="/Setting" element={<ProtectedRoute><Layout><Setting /></Layout></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </ThemeContextBar.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
