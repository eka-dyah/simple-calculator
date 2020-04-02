import React from 'react';

class Button extends React.Component {
  
    render(){
      let {clear, operation, number, equal, decimal} = this.props;
      return(
        <div id="calculator">
          <button 
            id="clear"
            value="AC"
            onClick={clear}
            className="btn btn-danger"
            >
            AC
          </button>
          <button 
            id="divide"
            value="/"
            onClick={operation}
            className="btn btn-primary"
            >
            /
          </button>
          <button 
            id="multiply"
            value="*"
            onClick={operation}
            className="btn btn-primary"
            >
            *
          </button><br />
          <button 
            id="add"
            value="+"
            onClick={operation}
            className="btn btn-primary"
            >
            +
          </button>
          <button 
            id="subtract"
            value="-"
            onClick={operation}
            className="btn btn-primary"
            >
            -
          </button>
          <button 
            id="equals"
            value="="
            onClick={equal}
            className="btn btn-danger"
            >
            =
          </button><br/>
          <button 
            id="one"
            value="1"
            onClick={number}
            className="btn"
            >
            1
          </button>
          <button 
            id="two"
            value="2"
            onClick={number}
            className="btn"
            >
            2
          </button>
          <button 
            id="three"
            value="3"
            onClick={number}
            className="btn"
            >
            3
          </button><br />
          <button 
            id="four"
            value="4"
            onClick={number}
            className="btn"
            >
            4
          </button>
          <button 
            id="five"
            value="5"
            onClick={number}
            className="btn"
            >
            5
          </button>
          <button 
            id="six"
            value="6"
            onClick={number}
            className="btn"
            >
            6
          </button><br />
          <button 
            id="seven"
            value="7"
            onClick={number}
            className="btn"
            >
            7
          </button>
          <button 
            id="eight"
            value="8"
            onClick={number}
            className="btn"
            >
            8
          </button>
          <button 
            id="nine"
            value="9"
            onClick={number}
            className="btn"
            >
            9
          </button><br />
          <button 
            id="zero"
            value="0"
            onClick={number}
            className="btn"
            >
            0
          </button>
          <button 
            id="decimal"
            value="."
            onClick={decimal}
            className="btn"
            >
            .
          </button><br />
        </div>
      )
    }
  }
  export default Button;