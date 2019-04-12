import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "../src/components/dashboard/Dashboard";
import Wizard from "../src/components/wizard/Wizard";


export default (
    <Switch>
        < Route path="/" component={Dashboard} />
        <Route path="/wizard" component={Wizard} />

    </Switch>
);