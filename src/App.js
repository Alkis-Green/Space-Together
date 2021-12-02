import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Apod from "./components/Apod/Apod";
import Asteroids from "./components/Asteroids/Asteroids";
import NasaSearch from "./components/NasaSearch/NasaSearch";
import Eonet from "./components/Eonet/Eonet";
import RoverHome from "./pages/RoverHome";
import Roverpics from "./components/MarsRoverPhotos/Curiosity/Roverpics";
import Opportunity from "./components/MarsRoverPhotos/Opportunity/Opportunity";
import Spirit from "./components/MarsRoverPhotos/Spirit/Spirit";
import PageError from "./components/PageError/PageError";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {/* <CustomCursor /> */}
        <Navbar toggle={toggleTheme} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/apod">
            <Apod />
          </Route>
          <Route path="/asteroids">
            <Asteroids />
          </Route>
          <Route path="/gallery">
            <NasaSearch />
          </Route>
          <Route path="/eonet">
            <Eonet />
          </Route>
          <Route path="/rover">
            <RoverHome />
          </Route>
          <Route path="/curiosity">
            <Roverpics />
          </Route>
          <Route path="/opportunity">
            <Opportunity />
          </Route>
          <Route path="/spirit">
            <Spirit />
          </Route>
          <Route path="/*">
            <PageError />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
