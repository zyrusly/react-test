import React from 'react'
import Test1 from './components/Test1'
import Header from './components/Header'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from './components/Login'
import About from './components/About'

function App() {


  return (
    <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='Login' element={<Login/>} />
            <Route exact path='about' element={<About/>} />
            <Route exact path='test' element={<Test1/>} />
        </Routes>
    </Router>
  )
}

export default App