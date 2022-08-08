import { PopUp } from "./style";

function PopUpFalha({setRegistro, setLogado}){
    return(
        <PopUp>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#E83F5B"/>
<path d="M16.375 18.8125C16.375 17.6094 15.3906 16.625 14.1875 16.625C12.957 16.625 12 17.6094 12 18.8125C12 20.043 12.957 21 14.1875 21C15.3906 21 16.375 20.043 16.375 18.8125ZM12.2461 7.71094L12.6016 15.1484C12.6289 15.4766 12.9297 15.75 13.2578 15.75H15.0898C15.418 15.75 15.7188 15.4766 15.7461 15.1484L16.1016 7.71094C16.1289 7.32812 15.8281 7 15.4453 7H12.9023C12.5195 7 12.2188 7.32812 12.2461 7.71094Z" fill="#343B41"/>
</svg>
            <p>Ops! Algo deu errado</p>
            <button onClick={() =>{
                setRegistro()
                setLogado()
            }}>X</button>
        </PopUp>
    )
}

export default PopUpFalha