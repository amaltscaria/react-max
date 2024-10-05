const InputGroup = ({ onChange, inputValues }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            name="initialInvestment"
            id="initialInvestment"
            onChange={onChange}
            value={inputValues.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            name="annualInvestment"
            id="annualInvestment"
            onChange={onChange}
            value={inputValues.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            required
            name="expectedReturn"
            id="expectedReturn"
            onChange={onChange}
            value={inputValues.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            required
            name="duration"
            id="duration"
            onChange={onChange}
            value={inputValues.duration}
          />
        </p>
      </div>
    </section>
  );
};

export default InputGroup;
