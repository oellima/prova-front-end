import "./deletedataconfirmation.scss";

import DeleteDataValidation from "../validationtodelete/ValidationToDelete";
import Button from "../button/Button";
import { useState } from "react";

export default function DeleteDataConfirmation({ user }) {
    const [userToDelete, setUserToDelete] = useState()
    const handleDeleteData = (e) => {
        const validationToEdit = document.querySelector(".validation-to-delete");
        const deleteDataConfirmation = document.querySelector(".delete-data-confirmation");
        validationToEdit.style.display = "flex";
        deleteDataConfirmation.style.display = "none";
        setUserToDelete(e)
    }
    const handleGiveUp = () => {
        const deleteDataConfirmation = document.querySelector(".delete-data-confirmation");
        const table = document.querySelector(".register-list-table")
        deleteDataConfirmation.style.display = "none";
        table.style.display = "flex";
    }
    return (
        <>
            <div className="delete-data-confirmation">
                <h3>Você deseja realmente apagar o Usuário: {user?.name}?</h3>
                <div className="buttons">
                    <Button name={"Não"} onClick={handleGiveUp}/>
                    <Button name={"Sim"} onClick={() => handleDeleteData(user)}/>
                </div>
            </div>
            <DeleteDataValidation user={userToDelete} />
        </>
    )
}