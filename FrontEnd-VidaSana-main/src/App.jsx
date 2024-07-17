import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Contaminacion from './Contaminacion/Contaminacion'
import Donaciones from './Donaciones/Donaciones'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contaminacion' element={<Contaminacion />} />
          <Route path='/donaciones' element={<Donaciones />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
