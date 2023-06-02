import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import GOVPB from "../../assets/GovPB.png";
import Menu from "../menu/Menu";

import "./navbar.scss";

import { openMenu, closeMenu } from "../../utils/navbar/navbar";

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div id="navbar">
                <Link to={"/"}>
                    <img className="govpb-image" src={GOVPB} alt="" />
                </Link>
                <div className="icons">
                    <AiOutlineMenu className="open-menu-icon" onClick={openMenu}/>
                    <AiOutlineClose className="close-menu-icon" onClick={closeMenu}/>
                </div>
            </div>
            <Menu closeMenu={closeMenu}/>
        </>
    )
}