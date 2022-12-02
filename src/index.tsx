import * as React from "react";
import * as ReactDOM from "react-dom"
import FirstComponent from './components/FirstComponent'

ReactDOM.render(
    <div>
        <h1>Hello world!</h1>
        <FirstComponent></FirstComponent>
    </div>,
    document.getElementById("root")
)