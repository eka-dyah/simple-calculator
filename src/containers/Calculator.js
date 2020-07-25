import React, { useState } from "react";
import Display from "../components/Display";
import Buttons from "../components/Buttons";

const intOrFloat = (value) => {
    if (/[.]/.test(value)) {
        return parseFloat(value);
    } else {
        return parseInt(value);
    }
};

const Calculator = () => {
    const [display, setDisplay] = useState(0);
    const [result, setResult] = useState(0);
    const [input, setInput] = useState(0);
    const [operator, setOperator] = useState();
    const [operatorActive, setOperatorActive] = useState(false);
    const [onStart, setOnStart] = useState(true);
    const [equal, setEqual] = useState(false);
    const [error, setError] = useState(false);
    let res = 0;

    const clickHandler = (e) => {
        const value = e.target.value;
        if (value === "AC") {
            setDisplay(0);
            setResult(0);
            setInput(0);
            setOperator();
            setOperatorActive(false);
            setOnStart(true);
            setEqual(false);
            setError(false);
            return;
        }

        if (!error) {
            
            if (onStart) {
                if (value === '=') {
                    return;
                }
                if (value === '.' && /[.]/.test(result)) {
                    return;
                }
                if (value === '0' && result === 0) {
                    return;
                }
                if (/[\d.]/.test(value)) {
                    setInput(input.toString() + value);
                }
                setDisplay(`${display} ${value} `);
            }

            if ((display === 0 && result === 0) || equal) {
                if (/[1-9]/.test(value)) {
                    setDisplay(value);
                    setResult(value);
                    setInput(value);
                    setEqual(false);
                    setOnStart(true);
                    return;
                }
            }

            if (/[-+x/=]/.test(value)) {

                if (equal && value !== '=') {
                    setDisplay(`${input} ${value} `);
                    setEqual(false);
                }

                if (operatorActive) {
                    setDisplay(`${result} ${value} `);
                    setOperator(value);
                    return;
                }

                switch (operator) {
                    case "+":
                        res = intOrFloat(input) + intOrFloat(result)
                        if (isNaN(res)) {
                            setError(true);
                            setDisplay('Error');
                            return;
                        }
                        setInput(res);
                        setResult(res);
                        if (value === "=") {
                            setDisplay(`${display} ${value} ${res}`);
                            setEqual(true);
                        } else {
                            setDisplay(`${res} ${value} `);
                        }
                        break;
                    case "-":
                        res = intOrFloat(input) - intOrFloat(result)
                        if (isNaN(res)) {
                            setError(true);
                            setDisplay('Error');
                            return;
                        }
                        setInput(res);
                        setResult(res);
                        if (value === "=") {
                            setDisplay(`${display} ${value} ${res}`);
                            setEqual(true);
                        } else
                            setDisplay(`${res} ${value} `);
                        break;
                    case "x":
                        res = intOrFloat(input) * intOrFloat(result)
                        if (isNaN(res)) {
                            setError(true);
                            setDisplay('Error');
                            return;
                        }
                        setInput(res);
                        setResult(res);
                        if (value === "=") {
                            setDisplay(`${display} ${value} ${res}`);
                            setEqual(true);
                        } else
                            setDisplay(`${res} ${value} `);
                        break;
                    case "/":
                        res = intOrFloat(input) / intOrFloat(result)
                        if (isNaN(res)) {
                            setError(true);
                            setDisplay('Error')
                            return;
                        }
                        setInput(res);
                        setResult(res);
                        if (value === "=") {
                            setDisplay(`${display} ${value} ${res}`);
                            setEqual(true);
                        } else
                            setDisplay(`${res} ${value} `);
                        break;
                    default:
                        break;
                }
                if (value === '=') {
                    setOperator();
                    return;
                };
                setOperator(value);
                setOperatorActive(true);
                setOnStart(false);
                return;
            }

            if (operatorActive) {
                setOperatorActive(false);
                setDisplay(display + value);
                setResult(value);
                return;
            }

            setResult(result + value);
            setDisplay(display + value);
        }
    };

    return (
        <React.Fragment>
            <Display display={display} result={result} operator={operator} />
            <Buttons clickHandler={clickHandler} />
        </React.Fragment>
    );
};

export default Calculator;
