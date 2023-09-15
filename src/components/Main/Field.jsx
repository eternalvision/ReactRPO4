import { useSelector } from "react-redux";

//! Context
// export const Field = ({ useContext, CounterContext }) => {
//     const { count } = useContext(CounterContext);
//     return <div className="field">{count}</div>;
// };

//! Redux
export const Field = () => {
    const state = useSelector((state) => state);
    return <div className="field">{state}</div>;
};
