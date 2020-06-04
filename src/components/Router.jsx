import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar";

import ban from "./img/ban.png";
import Home from "./home";
import LP from "./LpList";
import EpList from "./EpList";
import divers from "./Divers";
import VinyleDetails from "./VinyleDetails";

function Router() {
    return (
        <BrowserRouter>
            <MenuNav />
            <img className="mt-5 " src={ban} alt="baniere" />
            <hr />
            <Switch>
                <Route path="/LP/:id" component={VinyleDetails} />
                <Route path="/EP/:id" component={VinyleDetails} />
                <Route exact path="/" component={Home} />
                <Route path="/LP" component={LP} />
                <Route path="/EP" component={EpList} />
                <Route path="/Production" component={""} />
                <Route path="/Divers" component={divers} />
                <Route path="/Divers/fanzine" component={""} />
                <Route path="/Divers/IPEH" component={""} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
