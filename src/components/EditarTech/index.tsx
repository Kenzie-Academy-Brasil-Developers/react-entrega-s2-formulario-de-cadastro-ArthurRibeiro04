import { useContext } from "react"
import { TechsContext } from "../../Providers/TechsContext"
import { Modal } from "./style"
import { useForm } from "react-hook-form"

function EditarTecnologia(){

    const {setETech, placeTitle, DeleteTech, techId, EditTech} = useContext(TechsContext)

    const {register, handleSubmit} = useForm()

    return(
        <Modal>
            <div className="container">
                <h1>Detalhes da Tecnologia</h1>
                <button className="fechar" onClick={() => setETech(false)}>X</button>
                <form onSubmit={handleSubmit(EditTech as () => void)}>
                    <label>Nome</label>
                    <input value={placeTitle} type={"text"}></input>
                    <label>Selecionar Status</label>
                    <select {...register("status")}>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                    </select>
                    <div>
                    <button type="submit" className="editar">Salvar Alterações</button>
                    <button type="submit" className="deletar" onClick={() => DeleteTech(techId)}>Excluir</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default EditarTecnologia