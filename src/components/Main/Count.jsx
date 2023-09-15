import { useContext } from "react";
import { CounterContext } from "./Context";
import { ButtonMinus } from "./ButtonMinus";
import { ButtonPlus } from "./ButtonPlus";
import { Field } from "./Field";

export const Count = () => {
    return (
        <div className="counter">
            <ButtonMinus
                useContext={useContext}
                CounterContext={CounterContext}
            />
            <Field useContext={useContext} CounterContext={CounterContext} />
            <ButtonPlus
                useContext={useContext}
                CounterContext={CounterContext}
            />
        </div>
    );
};
