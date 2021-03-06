import React, { useEffect } from 'react';
import { Route, useLocation, NavLink } from 'react-router-dom';

import "./App.css";
import noImage from "./../components/images/noImage.png";
import CarouselHook from "./Carousel/CarouselHook";
import CarouselClass500 from "./Carousel/CarouselClass500";
import CarouselClass from "./Carousel/CarouselClass";
import CarouselVerticalScrolling from "./Carousel/CarouselVerticalScrolling";
import Timer from "./Timer/Timer";
import CarouselInfinity from "./Carousel/CarouselInfinity";
import OneInput from "./Input/OneInput";
import MultipleInput from "./Input/MultipleInput";
import { Iframe, IframeInside } from "./Iframe/Iframe";
import { ResizableBox } from "./Resizer/Resizer";

function App() {
  const { pathname } = useLocation();
  const [message, setMessage] = React.useState('');

  const handleChangeMessage = (target) => {
    setMessage(target);
  };

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener("message", displayMessage, false);
    } else {
      window.attachEvent("onmessage", displayMessage);
    }
    return () => window.removeEventListener("message", displayMessage)
  }, [])

  const displayMessage = (evt) => {
    if(typeof(evt.data) !== 'object') {
      setMessage(evt.data)
    }
  }

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
      component: <CarouselClass500/>,
      title: "простая карусель 500x500 (class)",
      path: "/#/carousel-class-500x500",
      src: "/carousel-class-500x500",
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
    },
    {
      component: <IframeInside message={message} handleChangeMessage={handleChangeMessage}/>,
      title: "IframeInside",
      path: "/#/iframeInside",
      src: "/iframeInside",
    },
    {
      component: <Iframe message={message} handleChangeMessage={handleChangeMessage} />,
      title: "Iframe",
      path: "/#/iframe",
      src: "/iframe",
    },
    {
      component: <ResizableBox />,
      title: "ResizableBox",
      path: "/#/ResizableBox",
      src: "/ResizableBox",
    },

  ]

  return (
    <div className="app">
      <Route exact path="/">
        <ul className="app__list">
          {
            cardDate.map((item, index) => {
              return (
                <li key={index} className="app__item">
                  <div className="app__iframeWrap">
                    <img className="app__iframe" src={noImage} alt="iframe не работает"/>
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

      {pathname !== '/' && pathname !== '/iframeInside' &&
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
