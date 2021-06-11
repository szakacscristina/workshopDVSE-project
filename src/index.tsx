import { createBrowserHistory } from "history"
import * as React from "react"
import * as ReactDom from 'react-dom'
import "./styles.scss"
import { Button, Text, Icon } from "./components/_shared"
import Header from "./components/header/component"
import { Router, Route, Switch } from "react-router"
import Home from "./components/home/component"
import Basket from "./components/basket/component"
import { createStore } from "redux"
import { reducer } from "./business/reducer"
import { Provider } from "react-redux"
// import Button from "./components/_shared/button/component"
// import Text from "./components/_shared/text/component"


const history = createBrowserHistory()

// initializam redux-store pe baza reduerului nostru 
const store = createStore(reducer)

//functia locala pentru randarea primelor componente de react - se va apela din REACTDOM.render(...)
function startApp() {
    return (
        // Providerul de redux => pentru ca fiecare component care implementeaza mapStateToProps sau mapDispatchToProps sa poata comunica cu storul
        <Provider store={store} >
            {/* Route care va asculta url -> face posibil ca toate componentele care implementeaza withRouter sa aiba acces la date despre ruta actuala */}
            <Router history={history}> 

                {/* Headerul aplicatiei noastre */}
                <Header />
                {/* Switcul ne va asigura ca doar o singura ruta din acestea doua se va randa la un anumit moment */}
                <Switch>
                    {/* Daca in url vom avea /basket atunci se va randa componenta noastra de basket */}
                    <Route path="/basket">
                        <Basket />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>


            </Router>
        </Provider>
    )
}

ReactDom.render(
    startApp(), document.getElementById("app"))