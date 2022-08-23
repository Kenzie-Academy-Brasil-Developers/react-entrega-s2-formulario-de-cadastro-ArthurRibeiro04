import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export const BaseContext = createContext({});

export const BaseProvider = ({ children }) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [registro, setRegistro] = useState()
    const [logado, setLogado] = useState()

    function onSubmitFunction(user){
        axios.post('https://kenziehub.herokuapp.com/users', user)
        .then(res => {
            navigate("/", {replace: true})
            setRegistro(true)
        })
        .catch(err => setRegistro(false))
    }

    function onLoginFunction(data){
        axios.post('https://kenziehub.herokuapp.com/sessions', data)
        .then((res) => {
            setUser(res.data.user)
            navigate("/dashboard", {replace: true})
            window.localStorage.clear()
            window.localStorage.setItem("@KenzieHub-Token", res.data.token)
            window.localStorage.setItem("@KenzieHub-UserId", res.data.user.id)
            setLogado(true)
        })
        .catch(err => setLogado(false))
        
    }

    function Logout(){
        setUser()
        window.localStorage.clear()
        navigate("/", {replace: true})
        
    }

    useEffect(() => {
        localStorage.getItem("@KenzieHub-Token") &&
        axios.get('https://kenziehub.herokuapp.com/profile' , {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("@KenzieHub-Token")}`
            }
        })
        .then(res => {
            setUser(res.data)
           
        })
        .catch(err => localStorage.clear)
    }, [])

    

    return(
        <BaseContext.Provider value={{ loading, user, registro, logado, Logout,onLoginFunction, onSubmitFunction, setRegistro, setLogado, setUser, setLoading}}>
            {children}
        </BaseContext.Provider>
    )
}