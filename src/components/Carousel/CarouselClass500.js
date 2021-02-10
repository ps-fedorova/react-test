import React from 'react';
import s from './Carousel.module.css';

const widthOfTheSlide = 500;
const standardOfDifference = 50;
const timerTransition = 1; // transition time in timer

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
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {

      if (this.state.timerTranslateX > 0) {
        this.setState(({ timerTranslateX }) => ({
          timerTranslateX: timerTranslateX - 1,
        }))
      } else {
        this.setState({
          timerTranslateXGo: false
        })
      }
    }, 1000);
    window.addEventListener("keydown", this.swipeKeyboard, false);
    window.addEventListener("touchstart", this.handleStartMove, { passive: false });
    window.addEventListener("touchmove", this.handleMove, { passive: false });
    window.addEventListener("touchend", this.handleEndMove, { passive: false });
    window.addEventListener("touchcancel", this.handleEndMove, { passive: false });
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
    window.removeEventListener("keydown", this.swipeKeyboard, false);
  }
  handleClickPrev = () => {
    if (this.state.x < 0) {
      this.setState({
        x: (this.state.x + widthOfTheSlide),
        offsetX: 0,
        timerTranslateXGo: true,
        timerTranslateX: (timerTransition),
      })
    }
  }
  handleClickNext = () => {
    if (this.state.x > -widthOfTheSlide * (SliderArr.length - 1)) {
      this.setState({
        x: (this.state.x - widthOfTheSlide),
        offsetX: 0,
        timerTranslateXGo: true,
        timerTranslateX: (timerTransition),
      })
    }
  }
// switching from the keyboard
  swipeKeyboard = (evt) => {
    if (evt.key === 'ArrowRight') this.handleClickNext();
    if (evt.key === 'ArrowLeft') this.handleClickPrev();
  }
  handleMoveCommon(difference) {
    if (difference > standardOfDifference && this.state.x > -widthOfTheSlide * (SliderArr.length - 1)) {
      this.handleClickNext();
    } else if (difference < -standardOfDifference && this.state.x < 0) {
      this.handleClickPrev();
    } else {
      this.setState({
        offsetX: 0
      })
    }
  }
// swipe switching
  handleStartMove = (event) => {
    event.preventDefault();
    if (event.type === 'mousedown') {
      this.setState({ startX: event.nativeEvent.clientX, mouseDown: true })
    } else if (event.type === 'touchstart') {
      this.setState({ startX: event.touches[0].clientX })
    }
  }
  handleMove = (event) => {
    if (event.type === 'mousemove' && this.state.mouseDown) {
      this.setState({ offsetX: (event.clientX - this.state.startX) })
    } else if (event.type === 'touchmove' && event.changedTouches) {
      this.setState({ offsetX: (event.changedTouches[0].clientX - this.state.startX) })
    }
  }


  handleEndMove = (event) => {
    let difference = 0;

    if (event.type === 'mouseup' && this.state.mouseDown) {
      this.setState({ mouseDown: false })
      difference = this.state.startX - event.clientX
    } else if (event.type === 'mouseout' && this.state.mouseDown) {
      this.setState({ mouseDown: false })
      difference = this.state.startX - event.clientX
    } else if (event.type === 'touchend') {
      difference = this.state.startX - event.changedTouches[0].clientX

    }
    this.handleMoveCommon(difference)
  }


  render() {

    const {
      x,
      offsetX,
      timerTranslateXGo,
      timerTranslateX,
    } = this.state

    return (

      <div className={s.carousel} style={{width:`${widthOfTheSlide}px`}}>
        <ul className={s.carousel__list}
            style={{
              transform: `translateX(calc(${x}px + ${offsetX}px))`,
              transition: timerTranslateXGo ? `all ${timerTransition}s ease 0s` : "",
            }}
            onMouseDown={this.handleStartMove}
            onMouseMove={this.handleMove}
            onMouseUp={this.handleEndMove}
            onMouseOut={this.handleEndMove}
        >
          {
            SliderArr.map((item, index) => {
                return (
                  <li className={s.carousel__item} style={{width:`${widthOfTheSlide}px`}} key={index} >
                    <img className={s.carousel__itemImg} src={item} alt="Картинка"/>
                  </li>
                )
              }
            )}
        </ul>
        <div style={{
          marginTop: 10,
          marginLeft: 10,
          position: 'absolute',
          color: 'white',
          backgroundColor: 'grey'
        }}>{timerTranslateX}</div>
        <button className={`${s.button} ${s.button_left}`} onClick={this.handleClickPrev}>&larr;</button>
        <button className={`${s.button} ${s.button_right}`} onClick={this.handleClickNext}>&rarr;</button>
      </div>
    )
  }
}

export default CarouselClass;
