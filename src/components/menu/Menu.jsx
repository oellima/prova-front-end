import { Link } from "react-router-dom";

import { GiArchiveRegister } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";

import "./menu.scss";

export default function Menu({ closeMenu }) {
    return (
        <ul id="menu">
            <li>
                <Link className="link" to={"/"} onClick={closeMenu}>
                    <AiFillHome className="icon"/>Início
                </Link>
            </li>
            <li>
                <Link className="link" to={"/cadastro"} onClick={closeMenu}>
                    <GiArchiveRegister className="icon"/>Cadastro
                </Link>
            </li>
            <li>
                <Link className="link" to={"/lista-de-cadastros"} onClick={closeMenu}>
                    <FaListUl className="icon"/>Lista de Cadastros
                </Link>
            </li>
        </ul>
    )
}