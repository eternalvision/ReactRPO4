import React, { useState } from "react";

export const UserForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log(name, lastName);
    };

    const handlerNameChanged = (event) => {
        let nameValue = event.target.value;
        if (nameValue.trim().toUpperCase() === "TEST") {
            alert("Wrong Name!");
            setName("");
        } else {
            setName(nameValue);
        }
    };

    const handlerLastNameChanged = (event) => {
        setLastName(event.target.value);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <input
                type="text"
                placeholder="Input name"
                value={name}
                onChange={handlerNameChanged}
                required
            />
            <input
                type="text"
                placeholder="Input Last Name"
                value={lastName}
                onChange={handlerLastNameChanged}
                required
            />
            <input type="submit" value="Send info" />
        </form>
    );
};
