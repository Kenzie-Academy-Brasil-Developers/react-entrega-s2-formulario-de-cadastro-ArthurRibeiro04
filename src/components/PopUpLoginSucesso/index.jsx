import { useContext } from "react";
import { BaseContext } from "../../Providers/BaseContext";
import { PopUp } from "./style";

function PopUpLoginSucesso(){

    const {setRegistro, setLogado} = useContext(BaseContext)

    return(
        <PopUp>
           <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#3FE864"/>
<path d="M11.7305 19.7812C12.0039 20.0547 12.4688 20.0547 12.7422 19.7812L20.7812 11.7422C21.0547 11.4688 21.0547 11.0039 20.7812 10.7305L19.7969 9.74609C19.5234 9.47266 19.0859 9.47266 18.8125 9.74609L12.25 16.3086L9.16016 13.2461C8.88672 12.9727 8.44922 12.9727 8.17578 13.2461L7.19141 14.2305C6.91797 14.5039 6.91797 14.9688 7.19141 15.2422L11.7305 19.7812Z" fill="#343B41"/>
</svg>
            <p>Logado com sucesso!</p>
            <button onClick={() =>{
                setRegistro()
                setLogado()
            }}>X</button>
        </PopUp>
    )
}

export default PopUpLoginSucesso