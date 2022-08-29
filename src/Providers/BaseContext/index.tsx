import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, ReactNode, SetStateAction} from "react";

interface ProviderProps{
    children: ReactNode
}

interface ITech{
    title: string,
    status: string,
}

interface IUser{
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    created_at: string,
    updated_at: string,
    techs: ITech[],
    works: [],
    avatar_url: null
}

interface ILogin{
    email: string,
    password: string,
}

interface IRegister{
    email: string,
    password: string,
    name: string,
    bio: string,
    contac: string,
    course_module: string,
}

interface baseProviderData{
    loading: boolean,
    setLoading: React.Dispatch<SetStateAction<boolean>>,
    user?: IUser,
    setUser: React.Dispatch<SetStateAction<IUser | undefined>>
    registro?: boolean,
    setRegistro: React.Dispatch<SetStateAction<boolean | undefined>>,
    logado?: boolean,
    setLogado: React.Dispatch<SetStateAction<boolean | undefined>>
    onSubmitFunction: (user: IRegister) => void,
    onLoginFunction: (data: ILogin) => void,
    Logout: () => void
}

export const BaseContext = createContext<baseProviderData>({} as baseProviderData);

export const BaseProvider = ({ children }: ProviderProps) => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<IUser | undefined>()
    const [registro, setRegistro] = useState<boolean>()
    const [logado, setLogado] = useState<boolean>()

    function onSubmitFunction(user: IRegister){
        axios.post('https://kenziehub.herokuapp.com/users', user)
        .then(res => {
            navigate("/", {replace: true})
            setRegistro(true)
        })
        .catch(err => setRegistro(false))
    }

    function onLoginFunction(data: ILogin){
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
        setUser(undefined)
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