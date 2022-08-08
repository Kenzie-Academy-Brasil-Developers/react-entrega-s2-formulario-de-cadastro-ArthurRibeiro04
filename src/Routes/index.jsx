import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/DashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";

function RoutesMain(){

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [registro, setRegistro] = useState()
    const [logado, setLogado] = useState()

    return(
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Login setLoading={setLoading} setUser={setUser} setRegistro={setRegistro} setLogado={setLogado} registro={registro} logado={logado}></Login>}></Route>
                <Route path="/dashboard" element={<Dashboard loading={loading} user={user} setRegistro={setRegistro} setLogado={setLogado} logado={logado}/>}></Route>
                <Route path="/register" element={<Register registro={registro} setRegistro={setRegistro} setLogado={setLogado}/>}></Route>
            </Routes>
        </AnimatePresence>
        
    )
}

export default RoutesMain