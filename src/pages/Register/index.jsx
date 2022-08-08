import { useForm } from "react-hook-form"
import * as yup from 'yup'; 
import { yupResolver } from '@hookform/resolvers/yup'
import { Absolute, Formulario } from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import PopUpSucesso from "../../components/PopUpSucesso";
import { motion } from "framer-motion"
import PopUpFalha from "../../components/PopUpFalha";

function Register({registro, setRegistro, setLogado}){
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        name: yup.string().required("Nome obrigatório"),
        password: yup.string().required("Senha obrigatória").matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "deve conter ao menos 1 número")
        .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
        .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], 'Senhas não condizem'),
        contact: yup.string().required("Precisa de um meio de contato")
    })
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

    const navigate = useNavigate()

    function onSubmitFunction(user){
        axios.post('https://kenziehub.herokuapp.com/users', user)
        .then(res => {
            navigate("/", {replace: true})
            setRegistro(true)
        })
        .catch(err => setRegistro(false))
    }

    function conferirRegistro(){
        if(registro === false){
            return(
        <Absolute>
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
        >
        <PopUpFalha setRegistro={setRegistro} setLogado={setLogado}></PopUpFalha>
        </motion.div>
        </Absolute>
            )
        }
    }
    return(
        <>
        {
            conferirRegistro()
        }
        <h1>Register</h1>
        <button onClick={() => navigate("/", {replace: true})}>Voltar</button>
        <Formulario>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input placeholder="Digite aqui seu nome" type={'text'} {...register("name")}></input>
            {errors.name?.message}
            <input placeholder="Digite aqui seu email" type={'email'} {...register("email")}></input>
            {errors.email?.message}
            <input placeholder="Digite aqui sua senha" type={'password'} {...register("password")}></input>
            {errors.password?.message}
            <input placeholder="Digite novamente sua senha" type={'password'} {...register("confirmPassword")}></input>
            {errors.confirmPassword?.message}
            <input placeholder="Fale sobre voce" type={'text'} {...register("bio")}></input>
            <input placeholder="Opçao de contato" type={'text'} {...register("contact")}></input>
            {errors.contact?.message}
            <select {...register("course_module")}>
                <option>Primeiro módulo (Introdução ao Frontend)</option>
                <option>Segundo módulo (Frontend Avançado)</option>
                <option>Terceiro módulo (Introdução ao Backend)</option>
                <option>Quarto módulo (Backend Avançado)</option>
            </select>
            <button type="submit">Cadastrar</button>
        </form>
        </Formulario>
        {
            registro && 
            conferirRegistro()
        }
        </>
    )
}

export default Register