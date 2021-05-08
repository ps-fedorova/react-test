import React from 'react';
import ReactDOM from 'react-dom';
import s from './Resizer.module.css';

export class ResizableBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resizable: { width: 200, height: 200 },
      resizer: { width: 15, height: 15 },
    };
  }

  resizing = (clientX, clientY) => {
      let node = ReactDOM.findDOMNode(this);
      let newState = Object.assign(
        this.state, {
          resizable: {
            width: clientX - node.offsetLeft + (this.state.resizer.width / 2),
            height: clientY - node.offsetTop + (this.state.resizer.height / 2)
          }
        });
      this.setState(newState);
  }

  render() {
    const style = {
      height: this.state.resizable.height,
      width: this.state.resizable.width,
    };

    return (
      <div className={`${s.resizable} ${s.unselectable}`} style={style} >
        <img src={"http://hellotraveler.ru/wp-content/uploads/2015/02/Emperor-penguins-in-Antarctica-9.jpg"} alt={""}
             style={style}/>
        <ResizerBox
          fResizing={this.resizing}
          resizerWidth={this.state.resizer.width}
          resizerHeight={this.state.resizer.height}
        >
        </ResizerBox>
      </div>
    );
  }
}

class ResizerBox extends React.Component {

  onMouseMove = (e) => {
    this.props.fResizing(e.clientX, e.clientY, e);
  }

  onMouseUp = () => {
    window.removeEventListener('mousemove', this.onMouseMove, false);
    window.removeEventListener('mouseup', this.onMouseUp, false);
  }

  onMouseDown = () => {
    window.addEventListener('mousemove', this.onMouseMove, false);
    window.addEventListener('mouseup', this.onMouseUp, false);
  }


  render() {
    const style = {
      width: this.props.resizerWidth,
      height: this.props.resizerHeight,
    };
    return (
      <div className={s.resizer}
           style={style}
           onMouseDown={this.onMouseDown}
      >
      </div>
    );
  }
}

