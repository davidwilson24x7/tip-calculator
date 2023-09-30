import TipRateSelector from "./TipRateSelector";
import "./TotalCalculator.css";
import { useState } from 'react';

function TotalCalculator() {
    // declarations
    const [total, setTotal] = useState(0); // user input
    const [tipComputation, setTipComputation] = useState(0); // total * tip rate (1000 * 10% = 100)
    const [tipRate, setTipRate] = useState(0.1); // 0.1 (10%), 0.15 (15%), 0.2 (20%), 0.3 (30%)
    const [errorMessage, setErrorMessage] = useState(''); // max of 7 digits, numbers only

    const handleTipRate = (event) => {
        setTipRate(event.target.value);
    }

    const handleTotal = (event) => {
        event.preventDefault();
        setErrorMessage(null);
        // if user input is correct
        if(total.length <= 7 && Number(total)){
            setTipComputation(total * tipRate);
        } else if (total.length > 7) {
            setErrorMessage("Maximum of 7 Digits Only");
        } else if(!Number(total)){
            setErrorMessage("Please input numbers only");
        }
    }

    return (
        <div className="calculator-style">
            <h1>Total Calculator</h1>
            <h2>Tip Rate Result: {tipComputation}</h2>
            <h2>Total Result: {Number(tipComputation) + Number(total)}</h2>
            <span>Total Bill:</span>
            <input 
                className="input-style" 
                onChange={(event) => setTotal(event.target.value)} 
                type="text" 
                placeholder="0" 
                value={total}>
            </input>

            <TipRateSelector handleOnChange={handleTipRate}></TipRateSelector>

            <div className="button-style">
                <button onClick={handleTotal} type="button">Calculate My Total Bill</button>
            </div>

            <div className="error-color">
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

export default TotalCalculator;
