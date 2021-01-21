import React, { useState, useEffect, useRef } from 'react';
import s from './CarouselHook.module.css';

const widthOfTheSlide = 100;
const standardOfDifference = 50;
const TIMER_TIME = 1; // transition time in seconds

const SliderArr = [
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
];

const CarouselHook = () => {

  const [x, setX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const [mouseDown, setMouseDown] = useState(false);

  // to enable the transition only when changing the slide
  const [timer, setTimer] = useState(0);
  const [timerGo, setTimerGo] = useState(false);

  const id = useRef(0);

  const stopTimer = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => stopTimer();
  }, [timerGo]);

  // to prevent the timer from going into negative mode
  useEffect(() => {
    if (timer <= 0 || !timerGo) {
      stopTimer();
      setTimerGo(false);
    }
  }, [timer, timerGo]);

  const goLeft = () => {
    if (x < 0)
      setX(x + widthOfTheSlide);
    setOffsetX(0);
    setTimerGo(true);
    setTimer(timer + TIMER_TIME);
  }

  const goRight = () => {
    if (x > -widthOfTheSlide * (SliderArr.length - 1))
      setX(x - widthOfTheSlide);
    setOffsetX(0);
    setTimerGo(true);
    setTimer(timer + TIMER_TIME);

  }

// swipe switching
  const handleStartMove = (event) => {
    event.preventDefault();
    if (event.type === 'mousedown') {
      setStartX(event.nativeEvent.clientX);
      setMouseDown(true);
    } else if (event.type === 'touchstart') {
      setStartX(event.touches[0].clientX);
    }
  };


  const handleMove = (event) => {
    if (event.type === 'mousemove' && mouseDown) {
      setOffsetX(event.clientX - startX);
    } else if (event.changedTouches && event.type === 'touchmove') {
      setOffsetX(event.changedTouches[0].clientX - startX);
    }
  };

  const handleEndMove = (event) => {
    let difference = 0;
    if (event.type === 'mouseup' && mouseDown) {
      difference = startX - event.clientX;
      setMouseDown(false);
    } else if (event.type === 'mouseout' && mouseDown) {
      difference = startX - event.clientX;
      setMouseDown(false);
    }

    if (event.type === 'touchend') {
      difference = startX - event.changedTouches[0].clientX;
    }

    if (difference > standardOfDifference) {
      goRight();
    } else if (difference < -standardOfDifference) {
      goLeft();
    } else {
      setOffsetX(0);
    }
  };

// switching from the keyboard
  function swipeKeyboard(evt) {
    if (evt.key === 'ArrowRight') goRight();
    if (evt.key === 'ArrowLeft') goLeft();
  }

  useEffect(() => {
    window.addEventListener('keydown', swipeKeyboard);

    return () => {
      window.removeEventListener('keydown', swipeKeyboard);
    };
  });

  return (
    <div className={s.carousel}>

      <ul className={s.carousel__list}
          style={{
            transform: `translateX(calc(${x}vw + ${offsetX}px))`,
            transition: timerGo ? `all ${TIMER_TIME}s ease 0s` : "",
          }}

          onMouseDown={handleStartMove}
          onMouseMove={handleMove}
          onMouseUp={handleEndMove}
          onMouseOut={handleEndMove}

          onTouchStart={handleStartMove}
          onTouchMove={handleMove}
          onTouchEnd={handleEndMove}

      >
        {
          SliderArr.map((item, index) => {
              return (
                <li className={s.carousel__item} key={index}>
                  <img className={s.carousel__itemImg} src={item} alt="Картинка"/>
                </li>
              )
            }
          )}
      </ul>
      <div style={{ marginTop: 20 }}>{timer}</div>
      <button className={`${s.button} ${s.button_left}`} onClick={goLeft}>&larr;</button>
      <button className={`${s.button} ${s.button_right}`} onClick={goRight}>&rarr;</button>
    </div>
  )
}

export default CarouselHook;
