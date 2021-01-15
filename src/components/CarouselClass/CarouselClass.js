import React from 'react';
import s from './Carousel.module.css';

const widthOfTheSlide = 100;
const standardOfDifference = 50;
const TimerTranslateX_TIME = 1; // transition time in timer

const SliderArr = [
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
];

class CarouselClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      startX: 0,
      offsetX: 0,
      mouseDown: false,
      timerTranslateX: 0,
      timerTranslateXGo: false,
    };
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);

    this.handleStartMove = this.handleStartMove.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEndMove = this.handleEndMove.bind(this);

    this.swipeKeyboard = this.swipeKeyboard.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { timerTranslateX } = this.state

      if (timerTranslateX > 0) {
        this.setState(({ timerTranslateX }) => ({
          timerTranslateX: timerTranslateX - 1
        }))
      }
    }, 1000);

    window.addEventListener("keydown", this.swipeKeyboard, false);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
    window.removeEventListener("keydown", this.swipeKeyboard, false);
  }
  
  goLeft() {
    if (this.state.x < 0) {
      this.setState({
        x: (this.state.x + widthOfTheSlide),
        offsetX: 0,
        timerTranslateXGo: true,
        timerTranslateX: (TimerTranslateX_TIME),
      })
    }
  }

  goRight() {
    if (this.state.x > -widthOfTheSlide * (SliderArr.length - 1)) {
      this.setState({
        x: (this.state.x - widthOfTheSlide),
        offsetX: 0,
        timerTranslateXGo: true,
        timerTranslateX: (TimerTranslateX_TIME),
      })
    }
  }

// swipe switching
  handleStartMove(event) {
    event.preventDefault();
    if (event.type === 'mousedown') {
      this.setState({
          startX: event.nativeEvent.clientX,
          mouseDown: true
        }
      )

    } else if (event.type === 'touchstart') {
      this.setState({
        startX: event.touches[0].clientX
      })
    }
  };

  handleMove(event) {
    if (event.type === 'mousemove' && this.state.mouseDown) {
      this.setState({
        offsetX: (event.clientX - this.state.startX)
      })
    } else if (event.changedTouches && event.type === 'touchmove') {
      this.setState({
        offsetX: (event.changedTouches[0].clientX - this.state.startX)
      })
    }
  };

  handleEndMove(event) {
    let difference = 0;
    if (event.type === 'mouseup' && this.state.mouseDown) {
      difference = this.state.startX - event.clientX;
      this.setState({
        mouseDown: false
      })
    } else if (event.type === 'mouseout' && this.state.mouseDown) {
      difference = this.state.startX - event.clientX;
      this.setState({
        mouseDown: false
      })
    }

    if (event.type === 'touchend') {
      difference = this.state.startX - event.changedTouches[0].clientX;
    }

    if (difference > standardOfDifference) {
      this.goRight();
    } else if (difference < -standardOfDifference) {
      this.goLeft();
    } else {
      this.setState({
        offsetX: 0
      })
    }
  };

// switching from the keyboard
  swipeKeyboard(evt) {
    if (evt.key === 'ArrowRight') this.goRight();
    if (evt.key === 'ArrowLeft') this.goLeft();
  }

  render() {

    const {
      x,
      offsetX,
      timerTranslateXGo,
      timerTranslateX,
    } = this.state

    return (

      <div className={s.carousel}>

        <ul className={s.carousel__list}
            style={{
              transform: `translateX(calc(${x}vw + ${offsetX}px))`,
              transition: timerTranslateXGo ? `all ${TimerTranslateX_TIME}s ease 0s` : "",
            }}

            onMouseDown={this.handleStartMove}
            onMouseMove={this.handleMove}
            onMouseUp={this.handleEndMove}
            onMouseOut={this.handleEndMove}

            onTouchStart={this.handleStartMove}
            onTouchMove={this.handleMove}
            onTouchEnd={this.handleEndMove}
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
        <div style={{ marginTop: 10, marginLeft: 10, position: 'absolute', color: 'white' }}>{timerTranslateX}</div>
        <button className={`${s.button} ${s.button_left}`} onClick={this.goLeft}>&larr;</button>
        <button className={`${s.button} ${s.button_right}`} onClick={this.goRight}>&rarr;</button>
      </div>
    )
  }
}

export default CarouselClass;
