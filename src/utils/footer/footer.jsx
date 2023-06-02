import Codata from "../../assets/Codata.svg";
import GovPB from "../../assets/GovPB.png";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

export const links = [
    { 
        id: 1,
        name: "GOVERNADORIA", 
        route: "", 
        sublinks: [
            {
                id: 1, name: "Governador", route: ""
            }, 
            {
                id: 2, name: "Vice-Governador", route: ""
            }
        ]
    },
    { 
        id: 2,
        name: "NOTÍCIAS", 
        route: "",
        sublinks: []
    },
    {   
        id: 3,
        name: "SERVIÇOS", 
        route: "",
        sublinks: []
    },
    { 
        id: 4,
        name: "LINKS ÚTEIS", 
        route: "",
        sublinks: []
    },
    { 
        id: 5,
        name: "CONTATOS", 
        route: "",
        sublinks: []
    },
    { 
        id: 6,
        name: "WEBEMAIL", 
        route: "",
        sublinks: []
    },
    { 
        id: 7,
        name: "OPORTUNIDADE PARAÍBA", 
        route: "",
        sublinks: []
    },
    { 
        id: 8,
        name: "CORONAVÍRUS", 
        route: "",
        sublinks: []
    },
    { 
        id: 9,
        name: "JUCEP DIGITAL", 
        route: "",
        sublinks: []
    },
    { 
        id: 10,
        name: "MARCA DO GOVERNO", 
        route: "", 
        sublinks: [
            {
                id: 1,
                name: "Sinalização interna e externa", route: ""
            }, 
            {
                id: 2,
                name: "Assinatura das Secretarias", route: ""
            },
            {
                id: 3,
                name: "Papelaria", route: ""
            }
        ]
    },
    { 
        id: 11,
        name: "FAKE NAO", 
        route: "",
        sublinks: []
    },
    { 
        id: 12,
        name: "MEDIDAS CONTRA A COVID-19", 
        route: "",
        sublinks: []
    },
    { 
        id: 13,
        name: "LEI ALDAIR BLANC", 
        route: "",
        sublinks: []
    },
    { 
        id: 14,
        name: "EGD", 
        route: "",
        sublinks: []
    },
    { 
        id: 15,
        name: "CENSO DA PESSOA COM DEFICIÊNCIA", 
        route: "",
        sublinks: []
    },
    { 
        id: 16,
        name: "PROGRAMA DE INCENTIVO E ISENÇÕES", 
        route: "",
        sublinks: []
    }
];

export const links_social_media_images = [
    {
        id: 1,
        img: Codata,
        alt: "",
        route: ""
    },
    {
        id: 2,
        img: GovPB,
        alt: "",
        route: ""
    }
];

export const links_social_media_icons = [
    {
        id: 1,
        img: <FaFacebookF/>,
        alt: "",
        route: ""
    },
    {
        id: 2,
        img: <FaTwitter/>,
        alt: "",
        route: ""
    },
    {
        id: 3,
        img: <FaInstagram/>,
        alt: "",
        route: ""
    },
    {
        id: 4,
        img: <TfiYoutube/>,
        alt: "",
        route: ""
    }
]