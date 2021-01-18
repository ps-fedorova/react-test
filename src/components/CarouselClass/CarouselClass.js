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
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.swipeKeyboard = this.swipeKeyboard.bind(this);

    this.handleMoveDesktop = this.handleMoveDesktop.bind(this);
    this.handleStartMoveDesktop = this.handleStartMoveDesktop.bind(this);
    this.handleEndMoveDesktop = this.handleEndMoveDesktop.bind(this);

    this.handleMoveMobile = this.handleMoveMobile.bind(this);
    this.handleStartMoveMobile = this.handleStartMoveMobile.bind(this);
    this.handleEndMoveMobile = this.handleEndMoveMobile.bind(this);
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

  handleClickPrev() {
    if (this.state.x < 0) {
      this.setState({
        x: (this.state.x + widthOfTheSlide),
        offsetXY: 0,
        timerTranslateXYGo: true,
        timerTranslateXY: (timerTransition),
      })
    }
  }

  handleClickNext() {
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
  swipeKeyboard(evt) {
    if (evt.key === 'ArrowRight') this.handleClickNext();
    if (evt.key === 'ArrowLeft') this.handleClickPrev();
  }

  handleMoveCommon(difference) {
    if (difference > standardOfDifference) {
      this.handleClickNext();
    } else if (difference < -standardOfDifference) {
      this.handleClickPrev();
    } else {
      this.setState({
        offsetXY: 0
      })
    }
  }


// swipe switching
  handleStartMoveDesktop(event) {
    event.preventDefault();
    if (event.type === 'mousedown') {
      this.setState({
          startXY: event.nativeEvent.clientX,
          mouseDown: true
        }
      )

    } else if (event.type === 'touchstart') {
      this.setState({
        startXY: event.touches[0].clientX
      })
    }
  };

  handleMoveDesktop(event) {
    if (event.type === 'mousemove' && this.state.mouseDown) {
      this.setState({
        offsetXY: (event.clientX - this.state.startXY)
      })
    } else if (event.changedTouches && event.type === 'touchmove') {
      this.setState({
        offsetXY: (event.changedTouches[0].clientX - this.state.startXY)
      })
    }
  };

  handleEndMoveDesktop(event) {
    let difference = 0;
    if (event.type === 'mouseup' && this.state.mouseDown) {
      difference = this.state.startXY - event.clientX;
      this.setState({
        mouseDown: false
      })
    } else if (event.type === 'mouseout' && this.state.mouseDown) {
      difference = this.state.startXY - event.clientX;
      this.setState({
        mouseDown: false
      })
    }

    if (event.type === 'touchend') {
      difference = this.state.startXY - event.changedTouches[0].clientX;
    }
    this.handleMoveCommon(difference)
  };

// mobile swipe switching
  handleStartMoveMobile(event) {
    event.preventDefault();
    if (event.type === 'mousedown') {
      this.setState({
          startXY: event.nativeEvent.clientY,
          mouseDown: true
        }
      )

    } else if (event.type === 'touchstart') {
      this.setState({
        startXY: event.touches[0].clientY
      })
    }
  };

  handleMoveMobile(event) {
    if (event.type === 'mousemove' && this.state.mouseDown) {
      this.setState({
        offsetXY: (event.clientY - this.state.startXY)
      })
    } else if (event.changedTouches && event.type === 'touchmove') {
      this.setState({
        offsetXY: (event.changedTouches[0].clientY - this.state.startXY)
      })
    }
  };

  handleEndMoveMobile(event) {
    let difference = 0;
    if (event.type === 'mouseup' && this.state.mouseDown) {
      difference = this.state.startXY - event.clientY;
      this.setState({
        mouseDown: false
      })
    } else if (event.type === 'mouseout' && this.state.mouseDown) {
      difference = this.state.startXY - event.clientY;
      this.setState({
        mouseDown: false
      })
    }

    if (event.type === 'touchend') {
      difference = this.state.startXY - event.changedTouches[0].clientY;
    }
    this.handleMoveCommon(difference)
  };

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
              onMouseDown={this.handleStartMoveDesktop}
              onMouseMove={this.handleMoveDesktop}
              onMouseUp={this.handleEndMoveDesktop}
              onMouseOut={this.handleEndMoveDesktop}

              onTouchStart={this.handleStartMoveDesktop}
              onTouchMove={this.handleMoveDesktop}
              onTouchEnd={this.handleEndMoveDesktop}
          >
            {
              SliderArr.map((item, index) => {
                  return (
                    <li className={s.carousel__item} key={index}>
                      <img className={s.carousel__itemImg} src={item} alt="Картинка"/>
                      <input type="checkbox" style={{
                        marginTop: 200,
                        marginLeft: 200,
                        position: 'absolute',
                        color: 'white',
                        backgroundColor: 'grey'
                      }}/>
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
              onMouseDown={this.handleStartMoveMobile}
              onMouseMove={this.handleMoveMobile}
              onMouseUp={this.handleEndMoveMobile}
              onMouseOut={this.handleEndMoveMobile}

              onTouchStart={this.handleStartMoveMobile}
              onTouchMove={this.handleMoveMobile}
              onTouchEnd={this.handleEndMoveMobile}
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
