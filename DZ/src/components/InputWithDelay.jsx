import React, { useState } from "react";
import useDebounce from "./UseDebounce";

function InputWithDelay() {
    const [inputValue, setInputValue] = useState("");
    const debouncedInputValue = useDebounce(inputValue, 500);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputReset = () => {
        setInputValue("");
    };

    return (
        <div>
        <input value={inputValue} onChange={handleInputChange}/>
        <p>Количества Символов: {debouncedInputValue.length}</p>
        <p>Время Последнего Изменения: {new Date().toLocaleTimeString()}</p>
        <button onClick={handleInputReset}>Reset</button>
        </div>
    );
}

export default InputWithDelay