import Users from "./user.json";
import { Form } from "./Form";
import { NewForm } from "./NewForm";
import { UserForm } from "./UserForm";

export const MainComponent = () => {
    return (
        <main className="Main">
            <ul>
                {Users.map((e) => {
                    return (
                        <li key={e.name}>
                            {e.name} {e.lastName}
                        </li>
                    );
                })}
            </ul>
            <Form />
            <NewForm />
            <UserForm />
        </main>
    );
};
