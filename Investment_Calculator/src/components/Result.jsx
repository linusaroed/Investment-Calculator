import { calculateInvestmentResults, formatter } from "../util/investment.js";
import React from "react";

export default function Result({inputs}){

    const obj = {
        initialInvestment: inputs[0],
        annualInvestment: inputs[1],
        expectedReturn: inputs[2],
        duration: inputs[3]
    }

    const data = calculateInvestmentResults(obj);

    function calculateInvestedCapital(annualInvestment,year){
        return Math.round(Number(inputs[0]) + (Number(year)*Number(annualInvestment)));
    }

    function calculateTotalInterest(year){
        let totalInterest = 0;
        for(let i=0;i<year;i++){
            totalInterest = totalInterest + data[i].interest;
        }
        return Math.round(totalInterest);
    }

    return (
            <table id="result">
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.year}</td>
                            <td>{formatter.format(calculateTotalInterest(val.year)+calculateInvestedCapital(val.annualInvestment,val.year))}</td>
                            <td>{formatter.format(Math.round(val.interest))}</td>
                            <td>{formatter.format(calculateTotalInterest(val.year))}</td>
                            <td>{formatter.format(calculateInvestedCapital(val.annualInvestment,val.year))}</td>
                        </tr>
                    )
                })}
            </table>
    );
}