import React, { Component } from 'react';
import Win from './winMult';
import Lose from './loseMult'
import {Animation} from 'react-animate-style';

const correct = [
    "Wow, you are doing a great job",
    "Awesome, keep going",
    "Oh, You are the best in math",
    "Horaay, that was the correct answer",
];

const wrong = [
    "Ops, that was not the correct answer",
    "No worries, try it again",
    "Try again, you got more chances",
    "Don't worry, you'll get it next time",
];

class Mult extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "Let's test your multiplication skill!",
        index: 0,
        num1: Math.ceil(Math.random() * 10),
        num2: Math.ceil(Math.random() * 10),
        score: 0,
        response: "",
        incorrect: false,
        enter: "",
        level: "Zero",
      };
    }

    //render conditionally
    render() {
      if (this.state.score >= 20) {
        return this.renderWin();
      } else if (this.state.score === -10) {
        return this.renderLose();
      } else {
        return this.renderStill();
      }
    }

    renderLose() {
      return (
        <Lose />
      );
    }

    renderWin() {
      return (
        <Win />
      );
    }

    renderStill() {
      return (
        <div className='main-bg-mult main-bg-all'>
          <div className='still still-mult'>
            <Animation animationIn="bounceIn" isVisible="true">
                <h1 className='main-msg'>{this.state.message}</h1>
                <h3 className='msg-prize'>Get a prize when you hit score 20</h3>
            </Animation>
            <h1 className={this.state.incorrect ? "incorrect board" : "board"}>
              {this.state.num1} * {this.state.num2}
            </h1>
            <input
            placeholder="Answer"
            className='input'
              onKeyPress={this.inputKeyPress}
              onChange={this.updateResponse}
              value={this.state.response}
            ></input>
            <h3 className="ps">{this.state.enter}</h3>
            <div className='score'>Score: {this.state.score}</div>
            <div className={`level ${this.state.level}`}>{this.state.level}</div>
          </div>
          </div>
      );
    }

    updateResponse = (event) => {
      this.setState({
        response: event.target.value,
        enter: "Press Enter/Return",
      });
    };

    inputKeyPress = (event) => {
      const max = 3;
      let rand = Math.floor(Math.random() * (max + 1));
      if (rand === this.state.index) {
        if (rand === max) {
          rand = 0;
        } else {
          ++rand;
        }
      }
      if (event.key === "Enter") {
        const answer = parseInt(this.state.response);
        if (answer === this.state.num1 * this.state.num2) {
          this.setState((state) => ({
            score: state.score + 1,
            response: "",
            incorrect: false,
            message: correct[rand],
            index: rand,
            enter: "",
          }));

          if (this.state.score < 9) {
            this.setState((state) => ({
              num1: Math.ceil(Math.random() * 10),
              num2: Math.ceil(Math.random() * 10),
              //level: "Good",
            }));
          } else if (this.state.score < 17) {
            this.setState((state) => ({
              num1: Math.ceil(Math.random() * 10),
              num2: Math.ceil(Math.random() * 100),
              //level: "VeryGood",
            }));
          } else if (this.state.score >= 17) {
            this.setState((state) => ({
              num1: Math.ceil(Math.random() * 100),
              num2: Math.ceil(Math.random() * 100),
              //level: "Excellent"
            }));
          }
        } else {
          this.setState((state) => ({
            score: state.score - 1,
            response: "",
            incorrect: true,
            message: wrong[rand],
            index: rand,
            enter: "",
          }));
          /*if (this.state.score < -3 && this.state.score >= -6) {
            this.setState((state) => ({
              level: "Bad",
            }));
          } else if (this.state.score < -6) {
            this.setState((state) => ({
              level: "VeryBad",
            }));
          }*/
        }
        if (this.state.score < -2 && this.state.score >= -6) {
          this.setState((state) => ({
            level: "Bad",
          }));
        } else if (this.state.score < -6) {
          this.setState((state) => ({
            level: "VeryBad",
          }));
        } else if (this.state.score < 9 && this.state.score >= -2) {
          this.setState((state) => ({
            level: "Good",
          }));
        } else if (this.state.score < 17 && this.state.score >= 9) {
          this.setState((state) => ({
            level: "VeryGood",
          }));
        } else if (this.state.score >= 17) {
          this.setState((state) => ({
            level: "Excellent"
          }));
        }
      }
    };
}

export default Mult;