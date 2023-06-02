import { useState } from "react";
import RegisterUpdate from "../../components/registerupdate/RegisterUpdate";
import "./registerlist.scss";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import DeleteDataConfirmation from "../../components/deletedataconfirmation/DeleteDataConfirmation";
import ValidationToEdit from "../../components/validationtoedit/ValidationToEdit";

export default function RegisterList({ records }) {
    const [user, setUser] = useState()
    const handleDeleteData = (e) => {
        const deleteDataConfirmation = document.querySelector(".delete-data-confirmation");
        const table = document.querySelector(".register-list-table")
        deleteDataConfirmation.style.display = "flex";
        table.style.display = "none";
        setUser(e)
    }
    const handleRegisterUpdate = (user) => {
        const table = document.querySelector(".register-list-table")
        const validation = document.querySelector(".validation-to-edit")
        validation.style.display = "flex"
        table.style.display = "none"
        setUser(user)
    }
    return (
        <div id="register-list">
            <div className="register-list-table">
                <h2>Tabela de Cadastros</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="id-colum">
                                ID
                            </th>
                            <th className="name-colum">
                                Nome
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => {
                            return (
                                <tr key={record.id}>
                                    <td className="id-row">{record.id}</td>
                                    <td className="name-row">
                                        {record.name}
                                        <div className="icons">
                                            <MdDeleteForever className="icon" onClick={() => { handleDeleteData(record) }}/>
                                            <MdEdit className="icon" onClick={() => { handleRegisterUpdate(record) }}/>  
                                        </div>                                     
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <RegisterUpdate user={user} />
            <ValidationToEdit user={user} />
            <DeleteDataConfirmation user={user} />
        </div>
    )
}