import React from 'react';
import s from './Timer.module.css';

export default class Timer extends React.Component {
  state = {
    seconds: 3,
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }


  render() {
    const { seconds } = this.state
    return (
      <div className={s.containerTimer}>
        <h1>{seconds}</h1>
      </div>
    )
  }
}
