import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const Context = (props) => {
    const [count, setCount] = useState(1);

    const value = {
        count,
        decrementCounter: () => {
            count > 1 && setCount(count - 1);
        },
        incrementCounter: () => {
            count < 20 && setCount(count + 1);
        },
    };

    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );
};
