import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initalInvestment=resultData[0].valueEndOfYear-resultData[0].interest-resultData[0].annualInvestment
  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map(Eyear=>{ //Eyear:Every year's data
            const totalInterest=Eyear.valueEndOfYear-Eyear.annualInvestment*Eyear.year-initalInvestment
            const totoalAmountInvested=Eyear.valueEndOfYear-totalInterest
            return(
                <tr key={Eyear.year}>
                    <td>{Eyear.year}</td>
                    <td>{formatter.format(Eyear.valueEndOfYear)}</td>
                    <td>{formatter.format(Eyear.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totoalAmountInvested)}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
}
