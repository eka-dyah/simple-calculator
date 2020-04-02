import React from 'react';

class Display extends React.Component{
    render(){
      const {display, result} = this.props;
      
      return(
        <div>
         <div id="result">
           <p>{display}</p>
         </div>
          <div id="display">
            <p>{result}</p>
         </div>
        </div>
      )
    }
}

export default Display;