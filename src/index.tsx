import { createBrowserHistory } from "history"
import * as React from "react"
import * as ReactDom from 'react-dom'
import "./styles.scss"





const history = createBrowserHistory()
function startApp() {
    return (
        <div>
            WORKSHOP STARTER
        </div>
    )
}

ReactDom.render(
    startApp(), document.getElementById("app"))