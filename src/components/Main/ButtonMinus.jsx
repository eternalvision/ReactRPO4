import { useDispatch } from "react-redux";

//! Context
// export const ButtonMinus = ({ useContext, CounterContext }) => {
//     const { decrementCounter } = useContext(CounterContext);
//     return (
//         <button className="minus" onClick={() => decrementCounter()}>
//             -
//         </button>
//     );
// };

//! Provider
export const ButtonMinus = () => {
    const dispath = useDispatch();
    return (
        <button
            className="minus"
            onClick={() => dispath({ type: "REMOVE_COUNT", payload: 1 })}>
            -
        </button>
    );
};
