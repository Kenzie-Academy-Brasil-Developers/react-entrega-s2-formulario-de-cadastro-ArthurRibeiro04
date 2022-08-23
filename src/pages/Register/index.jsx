import { useForm } from "react-hook-form"
import * as yup from 'yup'; 
import { yupResolver } from '@hookform/resolvers/yup'
import { Absolute, Formulario, Header } from "./style";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { motion } from "framer-motion"
import PopUpFalha from "../../components/PopUpFalha";
import { BaseContext } from "../../Providers/BaseContext";

function Register(){
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

    const {registro, onSubmitFunction} = useContext(BaseContext)

    const navigate = useNavigate()

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
        <PopUpFalha></PopUpFalha>
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
        <Header>
        <svg width="123" height="22" viewBox="0 0 123 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20.9494H3.33833V15.3251L4.98051 12.8125L9.30568 20.9494H13.2993L7.37053 10.0197L13.2299 1.15812H9.22858L3.54649 9.88443H3.33833V1.15812H0V20.9494Z" fill="#FF577F"/>
<path d="M19.8686 21.2393C22.7983 21.2393 24.772 19.4515 25.2346 16.6973L22.1969 16.4461C21.8654 17.5767 21.0173 18.1662 19.9226 18.1662C18.2804 18.1662 17.2396 16.8036 17.2396 14.5907V14.581H25.304V13.4503C25.304 8.40589 22.8677 5.91266 19.7375 5.91266C16.2527 5.91266 13.9938 9.0147 13.9938 13.5953C13.9938 18.3015 16.2219 21.2393 19.8686 21.2393ZM17.2396 12.0298C17.309 10.3386 18.3343 8.98571 19.7915 8.98571C21.2178 8.98571 22.2046 10.2613 22.2124 12.0298H17.2396Z" fill="#FF577F"/>
<path d="M31.1659 12.368C31.1736 10.4546 32.0833 9.3336 33.4094 9.3336C34.7278 9.3336 35.5219 10.4159 35.5142 12.2327V20.9494H38.7985V11.4983C38.7985 8.03867 37.1795 5.91266 34.7123 5.91266C32.9545 5.91266 31.6824 6.99499 31.1504 8.72479H31.0117V6.10593H27.8815V20.9494H31.1659V12.368Z" fill="#FF577F"/>
<path d="M41.7596 20.9494H51.7129V17.6637H46.0694V17.5574L51.5125 8.78277V6.10593H41.9601V9.39158H47.5574V9.49788L41.7596 18.4948V20.9494Z" fill="#FF577F"/>
<path d="M54.6586 20.9494H57.9429V6.10593H54.6586V20.9494ZM56.3085 4.19252C57.2876 4.19252 58.0894 3.25514 58.0894 2.10516C58.0894 0.964845 57.2876 0.0274658 56.3085 0.0274658C55.337 0.0274658 54.5352 0.964845 54.5352 2.10516C54.5352 3.25514 55.337 4.19252 56.3085 4.19252Z" fill="#FF577F"/>
<path d="M66.4049 21.2393C69.3346 21.2393 71.3083 19.4515 71.7709 16.6973L68.7333 16.4461C68.4018 17.5767 67.5537 18.1662 66.4589 18.1662C64.8167 18.1662 63.7759 16.8036 63.7759 14.5907V14.581H71.8403V13.4503C71.8403 8.40589 69.404 5.91266 66.2739 5.91266C62.7891 5.91266 60.5301 9.0147 60.5301 13.5953C60.5301 18.3015 62.7582 21.2393 66.4049 21.2393ZM63.7759 12.0298C63.8453 10.3386 64.8707 8.98571 66.3278 8.98571C67.7541 8.98571 68.741 10.2613 68.7487 12.0298H63.7759Z" fill="#FF577F"/>
<path d="M79.9386 20.9494H83.2769V12.7739H90.0538V20.9494H93.3844V1.15812H90.0538V9.32394H83.2769V1.15812H79.9386V20.9494Z" fill="#FF577F"/>
<path d="M104.103 14.6293C104.111 16.62 103.024 17.6637 101.844 17.6637C100.603 17.6637 99.8014 16.5717 99.7937 14.8226V6.10593H96.5093V15.557C96.517 19.0263 98.1361 21.1426 100.518 21.1426C102.299 21.1426 103.579 19.9927 104.111 18.2532H104.234V20.9494H107.388V6.10593H104.103V14.6293Z" fill="#FF577F"/>
<path d="M110.511 20.9494H113.749V18.5721H113.895C114.35 19.809 115.345 21.191 117.257 21.191C119.955 21.191 122.06 18.5141 122.06 13.547C122.06 8.44454 119.863 5.91266 117.265 5.91266C115.283 5.91266 114.335 7.3912 113.895 8.59916H113.795V1.15812H110.511V20.9494ZM113.726 13.5276C113.726 10.8798 114.62 9.18865 116.216 9.18865C117.843 9.18865 118.706 10.9571 118.706 13.5276C118.706 16.1175 117.827 17.915 116.216 17.915C114.635 17.915 113.726 16.1755 113.726 13.5276Z" fill="#FF577F"/>
</svg>

        <button onClick={() => navigate("/", {replace: true})}>Voltar</button>
        </Header>
        <Formulario>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label>Nome</label>
            <input placeholder="Digite aqui seu nome" type={'text'} {...register("name")}></input>
            <span>{errors.name?.message}</span>
            <label>Email</label>
            <input placeholder="Digite aqui seu email" type={'email'} {...register("email")}></input>
            <span>{errors.email?.message}</span>
            <label>Senha</label>
            <input placeholder="Digite aqui sua senha" type={'password'} {...register("password")}></input>
            <span>{errors.password?.message}</span>
            <label>Confirmar Senha</label>
            <input placeholder="Digite novamente sua senha" type={'password'} {...register("confirmPassword")}></input>
            <span>{errors.confirmPassword?.message}</span>
            <label>Bio</label>
            <input placeholder="Fale sobre voce" type={'text'} {...register("bio")}></input>
            <label>Contato</label>
            <input placeholder="Opçao de contato" type={'text'} {...register("contact")}></input>
            <span>{errors.contact?.message}</span>
            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
                <option>Primeiro módulo (Introdução ao Frontend)</option>
                <option>Segundo módulo (Frontend Avançado)</option>
                <option>Terceiro módulo (Introdução ao Backend)</option>
                <option>Quarto módulo (Backend Avançado)</option>
            </select>
            <button className="cadastro" type="submit">Cadastrar</button>
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