import {Routes, Route} from "react-router-dom"

import Cadastro from "../pages/cadastro/Cadastro"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/login" element={<Login />}/>
            
        </Routes>
    )
}

export default AppRoutes