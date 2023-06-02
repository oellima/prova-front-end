import Button from "../button/Button";
import "./validationtoedit.scss";

export default function ValidationToEdit({ user }) {
    const handleValidation = (e) => {
        const input = document.querySelector("#cpf-validation-to-edit");
        const form = document.querySelector("#update-data-form");
        const validation = document.querySelector(".validation-to-edit");
        if(input.value === e.cpf){
            form.style.display = "block";
            validation.style.display = "none";
        } else {
            form.style.display = "none";
            validation.style.display = "flex";
        }
    }
    const handleGiveUp = () => {
        const table = document.querySelector(".register-list-table")
        const validation = document.querySelector(".validation-to-edit");
        validation.style.display = "none";
        table.style.display = "flex";
    }
    return (
        <div className="validation-to-edit">
            <label htmlFor="number">Para alterar o cadastro, digite o "CPF" de {user?.name}:</label>
            <input type="number" name="number" id="cpf-validation-to-edit" />
            <div className="buttons">
                <Button name={"Voltar"} onClick={handleGiveUp}/>
                <Button name={"Confirmar"} onClick={() => { handleValidation(user)}}/>
            </div>
        </div>
    )
}