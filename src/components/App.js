import React from 'react';
import { Route, Switch, useLocation, NavLink, } from 'react-router-dom';

import "./App.css";
import cat from "../images/cat.png";
import carouselHook from "../images/carousel-hook.jpg";
import carouselClass from "../images/carousel-class.jpg";
import timer from "../images/timer.jpg";
// import Carousel1 from "../components/Carousel1/AppCarousel"
import CarouselHook from "./Carousel/CarouselHook/CarouselHook";
import CarouselClass from "./Carousel/CarouselClass/CarouselClass";
import  Timer  from "./Timer/Timer";
import CarouselInfinity from "./Carousel/CarouselInfinity/CarouselInfinity";

function App() {


  const { pathname } = useLocation();

  return (
    <div className="app">
      <Switch>

        <Route exact path="/">
          <ul className="app__list">
            <li className="app__item">
              <NavLink className="app__home-link" title='карусель' to="/carousel-hook">
                <img className="app__img" src={carouselHook} alt="карусель"/>
                <p className="app__img-text">простая карусель (hook)</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" to="/carousel-class">
                <img className="app__img" src={carouselClass} alt="3"/>
                <p className="app__img-text">простая карусель (class)</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" title='здесь будет бесконечная карусель' to="/carousel-infinity">
                <img className="app__img" src={cat} alt="2"/>
                <p className="app__img-text">здесь будет бесконечная карусель</p>
              </NavLink>
            </li>
            <li className="app__item">
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" to="/timer">
                <img className="app__img" src={timer} alt="timer"/>
                <p className="app__img-text">таймер (class)</p>
              </NavLink>
            </li>
          </ul>
        </Route>

        {/*<Route path="/1">*/}
        {/*  <Carousel1/>*/}
        {/*</Route>*/}
        <Route path="/carousel-hook">
          <CarouselHook/>
        </Route>
        <Route path="/carousel-class">
          <CarouselClass/>
        </Route>
        <Route path="/carousel-infinity">
          <CarouselInfinity/>
        </Route>
        <Route path="/timer">
          <Timer/>
        </Route>
      </Switch>


      {pathname !== '/' &&
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
