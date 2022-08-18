import { createContext, useEffect, useState} from "react";
import axios from 'axios'

export const TechsContext = createContext({})

export const TechsProvider = ({children}) => {
    const [cTech, setCTech] = useState(false)
    const [techs, setTechs] = useState([])
    const [eTech, setETech] = useState(false)
    const [placeTitle, setPlaceTitle] = useState()
    const [placeSelect, setPlaceSelect] = useState()
    const [techId, setTechId] = useState()

    useEffect(() => {
        axios.get('https://kenziehub.herokuapp.com/profile' , {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("@KenzieHub-Token")}`
            }
        })
        .then(res => setTechs(res.data.techs))
        .catch(err => console.log(err))
    }, [cTech, techs])

    function DeleteTech(id){
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

    function onSubmitFunction(data){
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

    function EditTech(data){
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