import React, { useState } from "react";

const FunctionalCounter = (props) => {
    const [currentValue, setCurrentValue] = useState(props.StartValue);

    const handleButtonClick = () => {
        setCurrentValue(currentValue + props.incValue);
    };

    return (
        <>
            <button onClick={handleButtonClick}>Click Button</button>
            <span>{currentValue}</span>
        </>
    );
};

export const Counter = () => {
    return <FunctionalCounter StartValue={0} incValue={7} />;
};
