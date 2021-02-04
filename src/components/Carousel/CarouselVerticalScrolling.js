import React from 'react';
import s from './CarouselVerticalScrolling.module.css';


const widthOfTheSlide = 20;
const timerTransition = 1; // transition time in timer

const SliderArr = [
  "Большие города",
  "Пустые поезда",
  "Ни берега, ни дна",
  "Все начинать сначала",
  "Холодная война",
  "И время как вода",
  "Он не сошел с ума",
  "Ты ничего не знала",
  "Полковнику никто не пишет",
  "Полковника никто не ждет",
  "На линии огня",
  "Пустые города",
  "В которых никогда",
  "Ты раньше не бывала",
  "И рвутся поезда",
  "На тонкие слова",
  "Он не сошел с ума",
  "Ты ничего не знала"
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
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
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


  render() {

    const {
      x,
      offsetXY,
      timerTranslateXYGo,
      timerTranslateXY,
    } = this.state

    return (

      <div className={s.carousel}>
        <ul className={s.carousel__list}
            style={{
              transform: `translateY(calc(${x}vh + ${offsetXY}px))`,
              transition: timerTranslateXYGo ? `all ${timerTransition}s ease 0s` : "",
            }}
        >
          {
            SliderArr.map((item, index) => {
                return (
                  <li className={s.carousel__item} key={index}>
                    <form className={s.formContainer}>
                      <div className="form-group">
                        <p className="alert alert-light">{item}</p>
                        <button
                          type="button"
                          className="btn btn-info btn-lg btn-block"
                          onClick={this.handleClickNext}
                        >Дальше</button>
                      </div>
                    </form>
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
        }}>{timerTranslateXY}</div>
      </div>
    )
  }
}

export default CarouselClass;
