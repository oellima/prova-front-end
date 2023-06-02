export const inputs = [
    {
        id: "name", 
        name: "Nome:", 
        type: "text", 
        inputMode: "", 
        placeholder: "ex: Thiago da Silva", 
        pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", 
        autoFocus: "on", 
        autoComplete: true, 
        accept: "",
        maxlenght: ""
    },
    {
        id: "cpf", 
        name: "Cpf:", 
        type: "Number", 
        inputMode: "numeric", 
        placeholder: "xxx-xxx-xxx-xx", 
        pattern: "[0-9]+", 
        autoFocus: "off", 
        autoComplete: true, 
        accept: "",
        maxlenght: "99999999999"
    },
    {
        id: "email", 
        name: "E-mail:", 
        type: "email", 
        inputMode: "email", 
        placeholder: "exemple@email.com", 
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", 
        autoFocus: "off", 
        autoComplete: true, 
        accept: ""
    },
    {
        id: "birth", 
        name: "Data de Nascimento:", 
        type: "date", 
        inputMode: "", 
        placeholder: "", 
        pattern: "", 
        autoFocus: "", 
        autoComplete: true, 
        accept: ""
    },
    {
        id: "img", 
        name: "Foto:", 
        type: "file", 
        inputMode: "", 
        placeholder: "", 
        pattern: "", 
        autoFocus: "", 
        autoComplete: true, 
        accept: ".png"
    }
];