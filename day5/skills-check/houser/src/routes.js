import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "../src/components/dashboard/Dashboard";
import Wizard from "../src/components/wizard/Wizard";
import House from "./components/house/House";


export default (
    <Switch>
        <Route path="/wizard" component={Wizard} />
        <Route path="/" component={Dashboard} />
        <Route path="/house" component={House} />
    </Switch>
);