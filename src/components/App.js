import React from 'react';
import { Route, Switch, useLocation, NavLink, } from 'react-router-dom';

import "./App.css";
import cat from "../images/cat.png";
import carousel from "../images/carousel.jpg";

// import Carousel1 from "../components/Carousel1/AppCarousel"
import Carousel from "../components/Carousel/Carousel";
import CarouselInfinity from "./CarouselInfinity/CarouselInfinity";

function App() {


  const { pathname } = useLocation();

  return (
    <div className="app">
      <Switch>

        <Route exact path="/">
          <ul className="app__list">
            <li className="app__item">
              <NavLink className="app__home-link" title='карусель' to="/carousel">
                <img className="app__img" src={carousel} alt="карусель"/>
                <p className="app__img-text">простая карусель</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" title='здесь будет бесконечная карусель' to="/carousel-infinity">
                <img className="app__img" src={cat} alt="2"/>
                <p className="app__img-text">здесь будет бесконечная карусель</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" to="/3">
                <img className="app__img" src={cat} alt="3"/>
                <p className="app__img-text">empty</p>
              </NavLink>
            </li>
            <li className="app__item">
              <NavLink className="app__home-link" to="/4">
                <img className="app__img" src={cat} alt="4"/>
                <p className="app__img-text">empty</p>
              </NavLink>
            </li>
          </ul>
        </Route>

        {/*<Route path="/1">*/}
        {/*  <Carousel1/>*/}
        {/*</Route>*/}
        <Route path="/carousel">
          <Carousel/>
        </Route>
        <Route path="/carousel-infinity">
          <CarouselInfinity/>
        </Route>
        <Route path="/4">
          <div/>
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
