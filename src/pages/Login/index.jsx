import { useForm } from "react-hook-form";
import { Absolute, FormularioLogin } from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PopUpFalha from "../../components/PopUpFalha";
import { motion } from "framer-motion";
import PopUpSucesso from "../../components/PopUpSucesso";

function Login({setLoading, setUser, setRegistro, setLogado, registro, logado}){

    const {register, handleSubmit} = useForm()

    function onSubmitFunction(data){
        axios.post('https://kenziehub.herokuapp.com/sessions', data)
        .then((res) => {
            setUser(res.data.user)
            setLoading(false)
            navigate("/dashboard", {replace: true})
            window.localStorage.clear()
            window.localStorage.setItem("@KenzieHub-Token", res.data.token)
            window.localStorage.setItem("@KenzieHub-UserId", res.data.user.id)
            setLogado(true)
        })
        .catch(err => setLogado(false))
        
    }

    const navigate = useNavigate()

    function conferirLogin(){
        if(registro === true){
            return(
                <Absolute>
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            >
                <PopUpSucesso setRegistro={setRegistro} setLogado={setLogado}/>
            </motion.div>
        </Absolute>
            )
        }
        else if(logado === false){
            return (
                <Absolute>
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            >
                <PopUpFalha setRegistro={setRegistro} setLogado={setLogado}/>
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
        
        <FormularioLogin>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <label>Email</label>
                <input type={'email'} placeholder='Insira seu E-mail' {...register("email")}></input>
                <label>Senha </label>
                <input type={'password'} placeholder='Insira sua senha' {...register("password")}></input>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate("/register")}>Cadastre-se</button>
        </FormularioLogin>
       
        </>
    )
}

export default Login