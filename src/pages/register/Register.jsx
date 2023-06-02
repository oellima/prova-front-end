import InputContainer from "../../components/inputcontainer/InputContainer";
import SubmitButton from "../../components/submitbutton/SubmitButton";
import ResetButton from "../../components/resetbutton/ResetButton";

import { inputs } from "../../utils/inputs/inputs";

import "./register.scss";

import { useState } from "react";

import { usePostData } from "../../hooks/usePostData";

export default function Register({ records }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [image, setImage] = useState("");
    const randomNumbers = () => {
        const number = Math.floor(Math.random() * 5000);
        for(let i = 0; i < records.length; i++){
            if(records[i].id === number) {
                randomNumbers()
            }
        }
        return number;
    }
    const handleInputsChange = () => {
        const inputs = document.querySelectorAll(".input-register");
        inputs.forEach((e) => {
            switch (e.id) {
                case "name":
                    setName(e.value)
                    break;
                case "cpf":
                    setCpf(e.value)
                    break;
                case "email":
                    setEmail(e.value)
                    break;
                case "birth":
                    setBirth(e.value)
                    break;
                case "img":
                    setImage(e.value)
                    break;
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = document.querySelectorAll(".input-register");
        const userToAdd = {
            id: randomNumbers(),
            name: name,
            cpf: cpf,
            email: email,
            birth: birth,
            image: image
        };
        usePostData("http://localhost:3000/records", userToAdd);
        input.forEach((e) => {
            e.value = "";
        });
        setName("");
        setCpf("");
        setEmail("");
        setBirth("");
        setImage("");
        location.reload();
    }
    return (
        <section id="register">
            <form id="register-form" method="POST" >
                <fieldset form="register-form">
                    <legend>Área de Cadastro</legend>
                    <p>Preencha corretamente os campos para se cadastrar.</p>
                    {inputs.map((input) => {
                        return (
                            <InputContainer className="input-register" onChange={handleInputsChange} key={input.id} id={input.id} name={input.name} 
                            placeholder={input.placeholder} type={input.type} maxlenght={input.maxlenght}/>
                        )
                    })}
                    <div className="buttons">
                        <ResetButton name="Limpar" />
                        <SubmitButton name="Cadastrar" form="register-form" onClick={handleSubmit}/>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}