import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MenuNav from "./NavBar/NavBar";

import ban from "./Img/ban.png";
import styles from "./Styles/home.module.css";
import Home from "./Home/home";
import LP from "./PageShop/LpList";
import EpList from "./PageShop/EpList";

import divers from "./PageShop/Divers";
import VinyleDetails from "./PageShop/VinyleDetails";
import fanzineList from "./PageShop/fanzineList";

import HowBuy from "./Footer/HowBuy";
import ContactUs from "./Footer/ContactUs";
import Crew from "./Footer/Crew";
import cdList from "./PageShop/cdList";
import ProductionList from "./PageShop/ProductionList";
import { Row } from "reactstrap";
import TopNav from "./NavBar/TopNav";

function Router() {
  return (
    <BrowserRouter>
      <Row>
        <TopNav />
      </Row>
      <Row>
        <MenuNav />
      </Row>
      <div>
        <img className={styles.ban} src={ban} alt="logo kale borroka records" />
      </div>
      <Switch>
        <Route path="/CD:page" component={cdList} />
        <Route path="/LP:page" component={LP} />
        <Route path="/EP:page" component={EpList} />
        <Route exact path="/LP/:id" component={VinyleDetails} />
        <Route exact path="/EP/:id" component={VinyleDetails} />
        <Route exact path="/CD/:id" component={VinyleDetails} />
        <Route path="/Divers/fanzine" component={fanzineList} />
        <Route path="/Production" component={ProductionList} />
        <Route exact path="/" component={Home} />
        <Route exact path="/crew" component={Crew} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/how-to-buy" component={HowBuy} />
        <Route path="/LP" component={LP} />
        <Route path="/CD" component={cdList} />
        <Route path="/EP" component={EpList} />
        <Route path="/Divers" component={divers} />
        <Route path="/Divers/IPEH" component={""} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
