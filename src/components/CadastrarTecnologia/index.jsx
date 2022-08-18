import { useContext } from "react"
import { TechsContext } from "../../Providers/TechsContext"
import { Modal } from "./style"
import { useForm } from "react-hook-form"

function CadastrarTecnologia(){

    const {cTech, setCTech, onSubmitFunction} = useContext(TechsContext)

    const {register, handleSubmit} = useForm()

    return(
        cTech &&
        <Modal>
            <div>
                <h1>Cadastrar Tecnologia</h1>
                <button className="fechar" onClick={() => setCTech(false)}>X</button>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <label>Nome</label>
                    <input type={"text"} {...register("title")}></input>
                    <label>Selecionar Status</label>
                    <select {...register("status")}>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </select>
                    <button type="submit" className="cadastrar">Cadastrar Tecnologia</button>
                </form>
            </div>
        </Modal>
    )
}

export default CadastrarTecnologia