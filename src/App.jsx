import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Produtos from './Components/Produtos'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Contato from './Components/Contato'
import Produto from './Components/Produto'

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <div className='content'>
        <Header />
      <Routes>
        <Route path='/' element={<Produtos/>}></Route>
        <Route path="produto/:id" element={<Produto/>}></Route>
        <Route path='contato' element={<Contato/>}></Route>
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
