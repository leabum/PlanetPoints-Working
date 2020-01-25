import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Impressum } from "./components/pages/Impressum";
import { NoMatch } from "./components/pages/NoMatch";
import { Layout } from "./components/layout/Layout";
import { NavigationBar } from "./components/navigationbar/NavigationBar";
import { Jumbotron } from "./components/jumbotron/Jumbotron";
import { Footer } from "./components/footer/Footer";
import AuthProvider from "./AuthProvider";

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "PlanetPoints";
  }, []);

  return (
    <React.Fragment>
      <AuthProvider>
        <NavigationBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/impressum" component={Impressum} />
          <Route exact component={NoMatch} />
        </Switch>
        <Footer />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
