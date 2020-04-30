import React,{Fragment} from "react"
import reactDOM from "react-dom"
import List from "./containers/List"
import "bootswatch/dist/lux/bootstrap.min.css"


const App = () => {
    return (
        <Fragment>

            <nav  className = "navbar navbark-dark bg-dark border-bottom border-white">
                <a href = "/" className = "nabvar-brand">movie app</a>
            </nav>

            <main className="bg-dark">
                <div className="container">
                    <List />
                </div>
            </main>
        </Fragment>
    )
}

reactDOM.render(<App/>, document.getElementById("root"))