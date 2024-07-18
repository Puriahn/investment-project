export default function UserInput({ onchange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) =>
              onchange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Invesment</label>
          <input type="number" required value={input.annualInvestment} onChange={(event) =>
              onchange("annualInvesment", event.target.value)
            }/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={input.expectedReturn} onChange={(event) =>
              onchange("expectedReturn", event.target.value)
            }/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={input.duration} onChange={(event) =>
              onchange("duration", event.target.value)
            }/>
        </p>
      </div>
    </section>
  );
}
