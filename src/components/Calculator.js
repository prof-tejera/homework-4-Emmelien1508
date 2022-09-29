import { useState } from "react";
import { evaluate, round } from 'mathjs'
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0')

    const handleNumberClick = (event) => {
        const number = event.target.innerText;
        if (currentValue === '0') {
            setCurrentValue(number)
        } else {
            setCurrentValue(currentValue + number)
        }
    };

    const handleOperationClick = (event) => {
        const operation = event.target.innerText;
        if (currentValue !== '0') {
            setCurrentValue(currentValue + operation)
        }
    };

    const clearScreen = () => {
        setCurrentValue('0')
    }

    const evaluateExpression = () => {
        let currentExpression = currentValue
        if (currentValue.includes('x')) {
            currentExpression = currentExpression.replace('x', '*')
        } else if (currentValue.includes('÷')) {
            currentExpression = currentExpression.replace('÷', '/')
        } 
        const evaluatedExpression = round(evaluate(currentExpression), 5)
        setCurrentValue(evaluatedExpression)
    }

    return (
        <div className='calculator'>
            <Screen value={currentValue} />
            <div className='calculator-row'>
                <div>
                    <div>
                        <Operation value="C" onClick={clearScreen} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <Number value={7} onClick={handleNumberClick} />
                        <Number value={8} onClick={handleNumberClick} />
                        <Number value={9} onClick={handleNumberClick} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <Number value={4} onClick={handleNumberClick} />
                        <Number value={5} onClick={handleNumberClick} />
                        <Number value={6} onClick={handleNumberClick} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <Number value={1} onClick={handleNumberClick} />
                        <Number value={2} onClick={handleNumberClick} />
                        <Number value={3} onClick={handleNumberClick} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                        <Number value={''} onClick={handleNumberClick} />
                        <Number value={0} onClick={handleNumberClick} />
                        <Number value={''} onClick={handleNumberClick} />
                    </div>
                </div>
                <div>
                    <Operation value="+" onClick={handleOperationClick} />
                    <Operation value="÷" onClick={handleOperationClick} />
                    <Operation value="x" onClick={handleOperationClick} />
                    <Operation value="-" onClick={handleOperationClick} />
                    <Operation value="=" onClick={evaluateExpression} />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
