import "./inputcontainer.scss";

export default function InputContainer({ id, name, type, inputMode, placeholder, pattern, autoFocus, autoComplete, accept, maxlenght, onChange, className}) {
    return (
        <div className='input-container'>
            <label htmlFor={id}>{name}</label>
            <input className={className}
            id={id}
            type={type} 
            placeholder={placeholder}  
            inputMode={inputMode}
            pattern={pattern}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            accept={accept}
            max={maxlenght}
            onChange={onChange}
            >
            </input>
        </div>
    )
}