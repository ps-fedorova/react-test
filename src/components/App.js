import React from 'react';
import { Route, Switch, useLocation, NavLink, } from 'react-router-dom';

import "./App.css";
import cat from "../images/cat.png";

function App() {


  const { pathname } = useLocation();

  return (
    <div className="app">
      <Switch>

        <Route exact path="/">
          <ul className="app__list">
            <li className="app__item">
              <NavLink className="app__home-link" to="/1">
                <img className="app__img" src={cat} alt="1"/>
                <p className="app__img-text">1</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" to="/2">
                <img className="app__img" src={cat} alt="2"/>
                <p className="app__img-text">2</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" to="/3">
                <img className="app__img" src={cat} alt="3"/>
                <p className="app__img-text">3</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" to="/4">
                <img className="app__img" src={cat} alt="4"/>
                <p className="app__img-text">4</p>
              </NavLink>
            </li>
          </ul>
        </Route>

        <Route path="/1">
          <div/>
        </Route>
        <Route path="/2">
          <div/>
        </Route>
        <Route path="/3">
          <div/>
        </Route>
        <Route path="/4">
          <div/>
        </Route>
      </Switch>


      { pathname !== '/' &&
        <NavLink className="app__home-link" exact to="/">
        <button className="app__button-home-link">
          На главную
        </button>
      </NavLink>
      }

    </div>
  );
}

export default App;
