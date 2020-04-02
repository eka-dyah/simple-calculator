import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./Display";
import Button from "./Button";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      result: 0,
      displayedit:""
    };
  }
  clearHandler(){
    this.setState({
      display: 0,
      result: 0
    });
  }
  numberHandler(e){
    let num = e.target.value;
    this.setState(state =>{
      if(state.display == 0 || state.num == 0) {
        return {display: num, result:num};
      }
      return {display: state.display+num, 
              result: state.result+num};
    });
  }
  operationHandler(e){
    let op = e.target.value;
    let leng = this.state.display.length;
    let opCheck = this.state.display.length >=2 ? this.state.display.slice(leng-2): true;
    console.log(opCheck);
    this.setState(state => {
      if(/[\+\-\/\*]{2}/.test(opCheck)) {
        return {
          result: '',
          display: state.display.slice(0, leng-2)+op
        };
      }
      if (op == "-") {
        return {
          result: '',
          display: state.display + op
        };
      }
      else if (state.display[leng-1] == "+" ||
          state.display[leng-1] == "*" ||
          state.display[leng-1] == "-" ||
          state.display[leng-1] == "/") {
        return {
          result: '',
          display: state.display.slice(0, leng-1)+op
        };
      } 
      else {
        return {
          result: '',
          display: state.display + op
        };
      }
    })
  }
  decimalHandler(e){
    let decimal = e.target.value;
    let point = /\./g;
    this.setState(state => {
      if (!point.test(state.result)) {
        return {
          display: state.display+decimal,
          result: state.result+decimal
        };
      }
    });
  }
  equalHandler(){
    let number = eval(this.state.display);
    this.setState(state => {
      if(this.state.display.match(/\./, ".")) {
        return {
          display: number.toFixed(1),
          result: number
        };
      }
      else {
        return {
          display: number,
          result: number
        };
      }
    })
  }
  render(){
    return (
      <div id="app">
        <Display display={this.state.display} result={this.state.result}/>
        <Button number={this.numberHandler.bind(this)}
          clear={this.clearHandler.bind(this)}
          operation={this.operationHandler.bind(this)}
          equal={this.equalHandler.bind(this)}
          decimal={this.decimalHandler.bind(this)}/>
      </div>
    )
  }
}

export default App;
