import { Provider } from "react-redux"
import { store } from "../state"
import React from 'react'
import RepositoriesList from "./RepositoriesList";

const App = () => {
    return ( <Provider store={store}>
    <div>
        <h1>Search for a Package</h1>
        <RepositoriesList />
    </div>
    </Provider>
    )
};

export default App;