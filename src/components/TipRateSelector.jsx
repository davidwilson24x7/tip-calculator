import "./TipRateSelector.css";

// Since we're passing a function to this child component, we place the props in curly braces {}
function TipRateSelector({ handleOnChange }) {
  return (
    <div className="tip-rate-style">
      <span>Tip Rate</span>
        <select id="tip-rate-selector" onChange={handleOnChange}>
          <option value="0.1">10%</option>
          <option value="0.15">15%</option>
          <option value="0.2">20%</option>
          <option value="0.3">30%</option>
        </select>
    </div>
  );
}

export default TipRateSelector;
