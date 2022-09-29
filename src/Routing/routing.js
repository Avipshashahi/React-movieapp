import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/header'
import Movies from '../pages/movies/movies'

export default function routing() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact element={<Movies />} path={"/movies"} />
    <Route exact element={<Movies />} path={"/"} />
    </Routes>
   

    </BrowserRouter>
  )
}
