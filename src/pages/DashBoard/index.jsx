import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { Absolute } from "../Login/style";
import { motion } from "framer-motion"
import PopUpLoginSucesso from "../../components/PopUpLoginSucesso";

function Dashboard({loading, user, setRegistro, setLogado, logado}){

    const navigate = useNavigate()
    function Logout(){

        window.localStorage.clear()
        
    }

    function conferirLogin(){
        if(logado === true){
            return(
                <Absolute>
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            >
                <PopUpLoginSucesso setRegistro={setRegistro} setLogado={setLogado}/>
            </motion.div>
        </Absolute>
            )
        }
    }

    return(
        <>
        {
            conferirLogin()
        }
        <Container>
            {
                loading
                ? <h1>Carregando...</h1>
                : 
                <>
                <h1>{user.name}</h1>
                <h2>{user.course_module}</h2>
                <button onClick={() => {
                    navigate("/", {replace: true})
                    Logout()
                } }>Logout</button>
                </>
            }
        </Container>
         </>
    )
}

export default Dashboard