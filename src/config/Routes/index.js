import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Login } from '../../pages'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
