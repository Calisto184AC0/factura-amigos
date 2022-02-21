import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/sass/style.scss'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Hola</div>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)