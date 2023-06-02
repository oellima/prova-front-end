import { useState } from "react";
import { inputs } from "../../utils/inputs/inputs"

import InputContainer from "../inputcontainer/InputContainer";
import ResetButton from "../resetbutton/ResetButton";
import SubmitButton from "../submitbutton/SubmitButton";
import { usePutData } from "../../hooks/usePutData";

import "./registerupdate.scss";

export default function RegisterUpdate({ user }) {
    const [nameToUpdate, setNameToUpdate] = useState("");
    const [cpfToUpdate, setCpfToUpdate] = useState("");
    const [emailToUpdate, setEmailToUpdate] = useState("");
    const [birthToUpdate, setBirthToUpdate] = useState("");
    const [imageToUpdate, setImageToUpdate] = useState("");
    const handleInputsUpdateChange = () => {
        const inputs = document.querySelectorAll(".input-update");
        inputs.forEach((input) => {
            switch (input.id) {
                case "name":
                    setNameToUpdate(input.value)
                    break;
                case "cpf":
                    setCpfToUpdate(input.value)
                    break;
                case "email":
                    setEmailToUpdate(input.value)
                    break;
                case "birth":
                    setBirthToUpdate(input.value)
                    break;
                case "img":
                    setImageToUpdate(input.value)
                    break;
            }
        })
    }
    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        const inputs = document.querySelectorAll(".input-update");
        const updatedUser = {
            name: nameToUpdate,
            cpf: cpfToUpdate,
            email: emailToUpdate,
            birth: birthToUpdate,
            image: imageToUpdate 
        }
        usePutData(`http://localhost:3000/records/${user.id}`, updatedUser)
        inputs.forEach((e) => {
            e.value = "";
        })
        setNameToUpdate("")
        setCpfToUpdate("") 
        setEmailToUpdate("")
        setBirthToUpdate("")
        setImageToUpdate("")
        location.reload();
    }
    return (
        <form id="update-data-form">
            <fieldset>
                <legend>Editar Cadastro</legend>
                <p>Preencha os campos com os novos dados.</p>
                {inputs.map((input) => {
                    return (
                        <InputContainer className="input-update" onChange={handleInputsUpdateChange} 
                            key={input.id} 
                            id={input.id} 
                            name={input.name} 
                            placeholder={input.placeholder} 
                            type={input.type} 
                            maxlenght={input.maxlenght}
                        />
                    )
                })}
                <div className="buttons">
                    <ResetButton name="Limpar" />
                    <SubmitButton name="Cadastrar" form="update-data-form" onClick={handleSubmitUpdate}/>
                </div>
            </fieldset>
        </form>
    )
}