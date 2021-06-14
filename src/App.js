import React from "react";
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Footer from "./components/inc/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
   return (
                      <Router>
                    <div>

                    <Navbar />
                      <Switch>

                      <Route exact path="/home">
                      <Home />
                      </Route>

                      <Route path="/about">
                      <About />
                      </Route>

                      <Route path="/contact">
                      <Contact />
                      </Route>

                      <Route path="/services">
                      <Services />
                      </Route>

                      </Switch>
                     <Footer /> 

                    </div>
                    </Router>
  );
}

export default App;
