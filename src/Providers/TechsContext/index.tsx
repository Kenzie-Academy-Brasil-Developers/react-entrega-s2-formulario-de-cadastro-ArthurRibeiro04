import { createContext, useEffect, useState, ReactNode, SetStateAction} from "react";
import axios from 'axios'



interface ProvidersProp{
    children: ReactNode,
}

interface ITech{
    id: string,
    title: string,
    status: string,
}

interface techsProviderData{
    cTech: boolean,
    setCTech: React.Dispatch<SetStateAction<boolean>>,
    techs: ITech[],
    setTechs: React.Dispatch<SetStateAction<ITech[]>>,
    eTech: boolean,
    setETech: React.Dispatch<SetStateAction<boolean>>,
    placeTitle?: string,
    setPlaceTitle: React.Dispatch<SetStateAction<string | undefined>>,
    placeSelect?: string,
    setPlaceSelect: React.Dispatch<SetStateAction<string | undefined>>,
    techId?: string,
    setTechId: React.Dispatch<SetStateAction<string | undefined>>
    onSubmitFunction: (data: ITech) => void,
    DeleteTech: (id: string | undefined) => void,
    EditTech: (data: string) => void,
}

export const TechsContext = createContext<techsProviderData>({} as techsProviderData)

export const TechsProvider = ({children}: ProvidersProp) => {
    const [cTech, setCTech] = useState<boolean>(false)
    const [techs, setTechs] = useState<ITech[]>([])
    const [eTech, setETech] = useState<boolean>(false)
    const [placeTitle, setPlaceTitle] = useState<string>()
    const [placeSelect, setPlaceSelect] = useState<string>()
    const [techId, setTechId] = useState<string>()

    useEffect(() => {
        axios.get('https://kenziehub.herokuapp.com/profile' , {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("@KenzieHub-Token")}`
            }
        })
        .then(res => setTechs(res.data.techs))
        .catch(err => console.log(err))
    }, [cTech, techs])

    function DeleteTech(id: string | undefined){
       axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("@KenzieHub-Token")}`
        }
       })
       .then(res => {
        setTechs(techs)
        setETech(false)
       })
       .catch(err => console.log(err))
    }

    function onSubmitFunction(data: ITech){
        axios.post("https://kenziehub.herokuapp.com/users/techs", data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("@KenzieHub-Token")}`
            }
        })
        .then(res => {
            setCTech(false)
        })
        .catch(err => console.log(err))
    }

    function EditTech(data: string){
        axios.put(`https://kenziehub.herokuapp.com/users/techs/${techId}`, data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("@KenzieHub-Token")}`
            }
        })
        .then(res => setETech(false))
        .catch(err => console.log(err))
    }

    return(
        <TechsContext.Provider value={{cTech, setCTech, techs, setTechs, onSubmitFunction, DeleteTech, eTech, setETech, placeTitle, setPlaceTitle, placeSelect, setPlaceSelect, techId, setTechId, EditTech}}>
            {children}
        </TechsContext.Provider>
    )
}