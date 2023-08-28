import React, { useState } from "react";

export const Form = () => {
    const [content, setContent] = useState("");
    const [selectedItem, setSelectedItem] = useState("Shops");

    const handlerTextAreaChanged = (event) => {
        setContent(event.target.value);
    };
    const handlerSelectChanged = (event) => {
        setSelectedItem(event.target.value);
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
        const msg = {
            content: content,
            selectedItem: selectedItem,
        };
        console.log(msg);
        setContent("");
        setSelectedItem("");
    };

    return (
        <form onSubmit={handlerSubmit}>
            <label>
                Please choose category of your feedback
                <select value={selectedItem} onChange={handlerSelectChanged}>
                    <option>Services</option>
                    <option>Products</option>
                    <option>Shops</option>
                </select>
            </label>
            <textarea
                value={content}
                onChange={handlerTextAreaChanged}
                placeholder="Please enter your feedback"
                required></textarea>
            <input type="submit" value="Send feedback" />
        </form>
    );
};
