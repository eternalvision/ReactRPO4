import React, { useState } from "react";

export const NewForm = () => {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    };

    const handlerChange = (event) => {
        setName(event.target.value);
        // console.log(event.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Input name"
                value={name}
                onChange={handlerChange}
            />
            <input type="submit" value="Click me" />
        </form>
    );
};
