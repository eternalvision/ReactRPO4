import { Link } from "react-router-dom";
import Users from "./data.json";

export const HeaderComponent = () => {
    return (
        <header className="Header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/friends">Friends</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            <ul>
                {Users.map(({ id, name, username }) => {
                    return (
                        <li key={`${id}${username}`}>
                            <Link to={`/profile/${username}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};
