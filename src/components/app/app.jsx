import React from 'react';
import { Helmet } from "react-helmet"
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../../pages/home/home'
import TopNav from '../top-nav/nav';

import history from '../../history';

import 'bootstrap/dist/css/bootstrap.css';
import '../../sass/_bootstrap.scss';

import './app.scss';


export default function App() {
    return (
        <>
            <Helmet>
                <title>HCI Codes</title>
                <meta name="description" content="Humberside's official engineering club! Join now!" />
                <meta name="keywords" content="hci, humberside, engineering club, engineering, humberside collegiate institute" />
            </Helmet>

            <Router history={history}>
                <TopNav />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </>
    )
}