import { Counter } from "./Counter";
import { StateComponent } from "./StateComponent";

export const MainComponent = (props) => {
    let arr = [7, 88, -3];
    let [a, ...arr2] = arr;
    let obj = { name: "Bill", lastName: "White" };
    let { name, lastName } = obj;

    return (
        <main className="Main">
            <Counter /> <br />
            <StateComponent />
            <ul>
                <li>{a}</li>
                {arr2.map((v) => {
                    return (
                        <li key={v}>
                            <p>{v}</p>
                        </li>
                    );
                })}
            </ul>
            <p>Name: {name}</p>
            <p>Last Name: {lastName}</p>
            <hr />
            <h1>
                Author:{" "}
                {props.Author.map((v) => {
                    return <span key={v}>{v} </span>;
                })}
            </h1>
            <h1>
                Additional Authors:{" "}
                {props.AdditionalAuthors.map((v) => {
                    return <span key={v}>{v} </span>;
                })}
            </h1>
        </main>
    );
};
