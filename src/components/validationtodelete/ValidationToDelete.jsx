import Button from "../button/Button";
import "./validationtodelete.scss";
import { useDeleteData } from "../../hooks/useDeleteData";

export default function ValidationToDelete({ user }) {
    const handleValidation = async (e) => {
        const input = document.querySelector("#cpf-validation-to-delete");
        const validation = document.querySelector(".validation-to-delete");
        const table = document.querySelector(".register-list-table")
        if(input.value === e.cpf){
            useDeleteData(`http://localhost:3000/records/${e.id}`)
            location.reload()
            table.style.display = "block";
            validation.style.display = "none";
        } else {
            
        }
    }
    const handleGiveUp = () => {
        const table = document.querySelector(".register-list-table")
        const validation = document.querySelector(".validation-to-delete");
        validation.style.display = "none";
        table.style.display = "flex";
    }
    return (
        <div className="validation-to-delete">
            <label htmlFor="number">Para Deletar o cadastro, digite o "CPF" associado ao {user?.name}:</label>
            <input type="number" name="number" id="cpf-validation-to-delete" />
            <div className="buttons">
                <Button name={"Voltar"} onClick={handleGiveUp}/>
                <Button name={"Deletar"} onClick={() => { handleValidation(user)}}/>
            </div>
        </div>
    )
}