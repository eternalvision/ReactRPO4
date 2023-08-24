import Author from "./data.json";

export const App = ({ Components }) => {
    const { HeaderComponent, MainComponent, FooterComponent } = Components;
    let authors = ["John Sina", "John Snow"];
    return (
        <>
            <HeaderComponent />
            <MainComponent Author={Author} AdditionalAuthors={authors} />
            <FooterComponent />
        </>
    );
};
