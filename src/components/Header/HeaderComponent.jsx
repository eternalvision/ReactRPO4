const Items = ["Menu", "News", "Profile"];

const Navigation = () => {
    return (
        <nav>
            <ul
                style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#000",
                }}>
                {Items.map((v) => {
                    return (
                        <li
                            style={{
                                listStyle: "none",
                                margin: "10px",
                                fontSize: "25px",
                                padding: "10px",
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                            }}
                            key={v}>
                            {v}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

const Title = () => {
    return (
        <h1
            style={{
                textAlign: "center",
                textTransform: "uppercase",
            }}>
            Title
        </h1>
    );
};

export const HeaderComponent = () => {
    return (
        <header className="Header">
            <Navigation />
            <Title />
        </header>
    );
};
