import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Content from "./pages/Content/Content";
import Movie from "./pages/Movie";

const App = () => {
  const [favorite, setFavorite] = useState([]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home favorite={favorite} setFavorite={setFavorite} />
          </Route>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/content">
            <Content favorite={favorite} setFavorite={setFavorite} />
          </PrivateRoute>
          <Route exact path="/content/:movieId">
            <Movie favorite={favorite} setFavorite={setFavorite} />
          </Route>
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
