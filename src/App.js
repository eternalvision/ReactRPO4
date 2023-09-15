// import { Context } from "./components/Main/Context";
import { createStore } from "redux";
import { Provider } from "react-redux";

export const App = ({ Components }) => {
    const defaultState = 1;

    const reducer = (state = defaultState, action) => {
        switch (action.type) {
            case "ADD_COUNT":
                return state + action.payload;
            case "REMOVE_COUNT":
                return state - action.payload;
            default:
                return state;
        }
    };

    const store = createStore(reducer);

    const { HeaderComponent, MainComponent, FooterComponent } = Components;

    return (
        // <Context>
        <Provider store={store}>
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </Provider>
        // </Context>
    );
};
