import { Link } from "react-router-dom";

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
        </header>
    );
};
