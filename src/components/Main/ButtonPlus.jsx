import { useDispatch } from "react-redux";

//! Context
// export const ButtonPlus = ({ useContext, CounterContext }) => {
//     const { incrementCounter } = useContext(CounterContext);
//     return (
//         <button className="plus" onClick={() => incrementCounter()}>
//             +
//         </button>
//     );
// };

//! Redux
export const ButtonPlus = () => {
    const dispath = useDispatch();

    return (
        <button
            className="plus"
            onClick={() => dispath({ type: "ADD_COUNT", payload: 1 })}>
            +
        </button>
    );
};
