import React, { useState } from "react";

const Button = () => {
    const [btText, setBtText] = useState("Before click");
    const [btColor, setBtColor] = useState("yellow");

    const btClick = () => {
        setBtText("You clicked button");
        setBtColor("red");
    };
    return (
        <button style={{ backgroundColor: btColor }} onClick={btClick}>
            {btText}
        </button>
    );
};

export const StateComponent = () => {
    return <Button />;
};
