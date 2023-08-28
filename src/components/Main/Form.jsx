import React, { useState } from "react";

const GetValue = ({ Value }) => {
    return <p>{Value}</p>;
};

export const Form = () => {
    const nameRef = React.createRef();
    const [submValue, setSubmValue] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmValue(nameRef.current.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="Input" type="text" ref={nameRef} />
                <input type="submit" value="Send" />
            </form>
            {submValue ? <GetValue Value={submValue} /> : ""}
        </div>
    );
};
