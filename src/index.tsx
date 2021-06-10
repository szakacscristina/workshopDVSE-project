import { createBrowserHistory } from "history"
import * as React from "react"
import * as ReactDom from 'react-dom'
import { Button, Icon, Text } from "./components/_shared"
import "./styles.scss"
import Header from "./components/header/component"
// import Button from './components/_shared/button/component'
// import Text from './components/_shared/text/component'





const history = createBrowserHistory()
function startApp() {
    return (
        <div>
            <Header />
        </div>
    )
}

ReactDom.render(
    startApp(), document.getElementById("app"))