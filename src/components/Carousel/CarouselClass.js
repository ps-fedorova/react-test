import React from 'react';
import s from './Carousel.module.css';
import MediaQuery from 'react-responsive';

const widthOfTheSlide = 100;
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
      startXY: 0,
      offsetXY: 0,
      mouseDown: false,
      timerTranslateXY: 0,
      timerTranslateXYGo: false,
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {

      if (this.state.timerTranslateXY > 0) {
        this.setState(({ timerTranslateXY }) => ({
          timerTranslateXY: timerTranslateXY - 1,
        }))
      } else {
        this.setState({
          timerTranslateXYGo: false
        })
      }

    }, 1000);

    window.addEventListener("keydown", this.swipeKeyboard, false);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
    window.removeEventListener("keydown", this.swipeKeyboard, false);
  }

  handleClickPrev = () => {
    if (this.state.x < 0) {
      this.setState({
        x: (this.state.x + widthOfTheSlide),
        offsetXY: 0,
        timerTranslateXYGo: true,
        timerTranslateXY: (timerTransition),
      })
    }
  }

  handleClickNext = () => {
    if (this.state.x > -widthOfTheSlide * (SliderArr.length - 1)) {
      this.setState({
        x: (this.state.x - widthOfTheSlide),
        offsetXY: 0,
        timerTranslateXYGo: true,
        timerTranslateXY: (timerTransition),
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
        offsetXY: 0
      })
    }
  }

// swipe switching
  handleStartMove = (mobile) => (event) => {
    event.preventDefault();
    if (event.type === 'mousedown') {
      !mobile
        ? this.setState({ startXY: event.nativeEvent.clientX, mouseDown: true })
        : this.setState({ startXY: event.nativeEvent.clientY, mouseDown: true })
    } else if (event.type === 'touchstart') {
      !mobile
        ? this.setState({ startXY: event.touches[0].clientX })
        : this.setState({ startXY: event.touches[0].clientY })
    }
  }


  handleMove = (mobile) => (event) => {
    if (event.type === 'mousemove' && this.state.mouseDown) {
      !mobile
        ? this.setState({ offsetXY: (event.clientX - this.state.startXY) })
        : this.setState({ offsetXY: (event.clientY - this.state.startXY) })

    } else if (event.type === 'touchmove' && event.changedTouches) {
      !mobile
        ? this.setState({ offsetXY: (event.changedTouches[0].clientX - this.state.startXY) })
        : this.setState({ offsetXY: (event.changedTouches[0].clientY - this.state.startXY) })
    }
  }


  handleEndMove = (mobile) => (event) => {
    let difference = 0;

    if (event.type === 'mouseup' && this.state.mouseDown) {
      this.setState({ mouseDown: false })
      !mobile
        ? difference = this.state.startXY - event.clientX
        : difference = this.state.startXY - event.clientY
    } else if (event.type === 'mouseout' && this.state.mouseDown) {
      this.setState({ mouseDown: false })
      !mobile
        ? difference = this.state.startXY - event.clientX
        : difference = this.state.startXY - event.clientY

    } else if (event.type === 'touchend') {
      !mobile
        ? difference = this.state.startXY - event.changedTouches[0].clientX
        : difference = this.state.startXY - event.changedTouches[0].clientY
    }
    this.handleMoveCommon(difference)
  }


  render() {

    const {
      x,
      offsetXY,
      timerTranslateXYGo,
      timerTranslateXY,
    } = this.state

    return (

      <div className={s.carousel}>
        <MediaQuery minWidth={600}>
          <ul className={s.carousel__list}
              style={{
                transform: `translateX(calc(${x}vw + ${offsetXY}px))`,
                transition: timerTranslateXYGo ? `all ${timerTransition}s ease 0s` : "",
              }}
              onMouseDown={this.handleStartMove(false)}
              onMouseMove={this.handleMove(false)}
              onMouseUp={this.handleEndMove(false)}
              onMouseOut={this.handleEndMove(false)}

              onTouchStart={this.handleStartMove(false)}
              onTouchMove={this.handleMove(false)}
              onTouchEnd={this.handleEndMove(false)}
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
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <ul className={`${s.carousel__list} ${s.carousel__list_mobile}`}
              style={{
                transform: `translateY(calc(${x}vh + ${offsetXY}px))`,
                transition: timerTranslateXYGo ? `all ${timerTransition}s ease 0s` : "",
              }}
              onMouseDown={this.handleStartMove(true)}
              onMouseMove={this.handleMove(true)}
              onMouseUp={this.handleEndMove(true)}
              onMouseOut={this.handleEndMove(true)}

              onTouchStart={this.handleStartMove(true)}
              onTouchMove={this.handleMove(true)}
              onTouchEnd={this.handleEndMove(true)}
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
        </MediaQuery>

        <div style={{
          marginTop: 10,
          marginLeft: 10,
          position: 'absolute',
          color: 'white',
          backgroundColor: 'grey'
        }}>{timerTranslateXY}</div>
        <button className={`${s.button} ${s.button_left}`} onClick={this.handleClickPrev}>&larr;</button>
        <button className={`${s.button} ${s.button_right}`} onClick={this.handleClickNext}>&rarr;</button>
      </div>
    )
  }
}

export default CarouselClass;
