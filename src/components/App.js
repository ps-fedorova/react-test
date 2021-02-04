import React from 'react';
import { Route, useLocation, NavLink, } from 'react-router-dom';

import "./App.css";
import noImage from "./../components/images/noImage.png";
import CarouselHook from "./Carousel/CarouselHook";
import CarouselClass from "./Carousel/CarouselClass";
import CarouselVerticalScrolling from "./Carousel/CarouselVerticalScrolling";
import Timer from "./Timer/Timer";
import CarouselInfinity from "./Carousel/CarouselInfinity";
import OneInput from "./Input/OneInput";
import MultipleInput from "./Input/MultipleInput";

function App() {
  const cardDate = [
    {
      component: <CarouselHook/>,
      title: "простая карусель (hook)",
      path: "/#/carousel-hook",
      src: "/carousel-hook",
    },
    {
      component: <CarouselClass/>,
      title: "простая карусель (class), направление свайпа меняется при 600px ",
      path: "/#/carousel-class",
      src: "/carousel-class",
    },
    {
      component: <CarouselVerticalScrolling/>,
      title: "вертикальный скролл (class)",
      path: "/#/carousel-vertical-scrolling",
      src: "/carousel-vertical-scrolling",
    },
    {
      component: <CarouselInfinity/>,
      title: "здесь будет бесконечная карусель",
      path: "/#/carousel-infinity",
      src: "/carousel-infinity",
    },
    {
      component: <Timer/>,
      title: "таймер (class)",
      path: "/#/timer",
      src: "/timer",
    },
    {
      component: <OneInput/>,
      title: "поле ввода",
      path: "/#/one-input",
      src: "/one-input",
    },
    {
      component: <MultipleInput/>,
      title: "несколько полей ввода",
      path: "/#/multiple-input",
      src: "/multiple-input",
    }
  ]


  const { pathname } = useLocation();

  return (
    <div className="app">
      <Route exact path="/">
        <ul className="app__list">
          {
            cardDate.map((item, index) => {
              return (
                <li key={index} className="app__item">
                  <div className="app__iframeWrap">
                    {item.path
                      ? <iframe title={item.title} src={item.path} className="app__iframe" scrolling="no"/>
                      : <img className="app__img" src={noImage} alt="iframe не работает"/>
                    }

                  </div>
                  <NavLink exact className="app__home-link" title={item.title} to={item.src}>
                    <p className="app__img-text">{item.title}</p>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </Route>

      {cardDate.map((item, index) => {
        return (
          <Route key={index} path={item.src}>
            {item.component}
          </Route>
        )
      })}

      {pathname !== '/' &&
      <NavLink exact to="/">
        <button className="app__button-home-link">
          На главную
        </button>
      </NavLink>
      }
    </div>
  );
}

export default App;
