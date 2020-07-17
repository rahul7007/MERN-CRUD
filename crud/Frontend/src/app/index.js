import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Transaction from '../pages/Transaction'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Transaction} />
            </Switch>
        </Router>
    )
}

export default App