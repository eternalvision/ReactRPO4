import UserData from "./data.json";
import { useParams } from "react-router-dom";

const UserProfile = ({ data }) => {
    let { userName } = useParams();
    const { username, name } = data;
    if (userName === username) {
        return (
            <div>
                <ul>
                    <li>{username}</li>
                    <li>{name}</li>
                </ul>
            </div>
        );
    } else return null;
};

export const Profile = () => {
    return (
        <section className="Profile">
            {UserData.map((data) => {
                const { username, id } = data;
                return <UserProfile key={`${username}${id}`} data={data} />;
            })}
        </section>
    );
};
