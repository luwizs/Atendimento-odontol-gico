import {Routes, Route} from "react-router-dom"

import Cadastro from "../pages/cadastro/Cadastro"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Agendamento from "../pages/agendamento/Agendamento"

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/agendamento" element={<Agendamento />}/>
            
        </Routes>
    )
}

export default AppRoutes