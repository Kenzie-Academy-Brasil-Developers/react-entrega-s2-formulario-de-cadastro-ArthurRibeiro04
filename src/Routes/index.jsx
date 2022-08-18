
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/DashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AnimatePresence } from "framer-motion";

function RoutesMain(){


    return(
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </AnimatePresence>
        
    )
}

export default RoutesMain