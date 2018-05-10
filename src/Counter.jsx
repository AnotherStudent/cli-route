import React, { Component as C } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Counter extends C {
  constructor(props) {
    super();
    const { stars } = props;
    this.state = { stars };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ stars: nextProps.stars });
  }

  buttonClickPlus(){
    const stars = +this.state.stars + 1;
    this.setState({ stars });
  }
  buttonClickMinus(){
    if (+this.state.stars <= 0)
      return;
    const stars = +this.state.stars - 1;
    this.setState({ stars });
  }

  render() {
    return (
        <div>Лайкер <hr />
          <button onClick={() => this.buttonClickPlus()}><span role="img" aria-label="add">➕</span></button>
          <button onClick={() => this.buttonClickMinus()}><span role="img">➖</span></button>

          <Stars length={this.state.stars} /> 
      </div>
    );
  }
}

const Star = () => (
  <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionLeave={true}>
    <span>⭐️</span>
  </ReactCSSTransitionGroup>
);

const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => <Star />)}</span>;


export default Counter;