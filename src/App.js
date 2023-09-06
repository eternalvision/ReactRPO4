export const App = ({ Components }) => {
    const { HeaderComponent, MainComponent, FooterComponent } = Components;
    return (
        <>
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </>
    );
};
