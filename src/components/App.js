import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import BackDrop from "./backDrop/BackDrop";
import SideNav from "./sideNav/SideNav";
import Footer from "./footer/Footer";
import LandingPage from "./landingPage/LandingPage";
import CafeMenu from "./cafe/cafe-menu/CafeMenu";
import Cafe from "./cafe/Cafe";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <Nav drawerClickHandler={this.drawerToggleClickHandler} />
          <SideNav show={this.state.sideDrawerOpen} />
          {backdrop}
          <Route path="/" exact component={LandingPage} />
          <Route path="/cafe" exact component={CafeMenu} />
          <Route path="/cafelist" exact component={Cafe} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
