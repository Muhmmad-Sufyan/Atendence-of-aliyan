import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const IncomeExpense = () => {
    const transactions = useSelector((state) => state.transaction.transactions);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(() => {
        let inc = 0,
            exp = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (+transactions[i].amount > 0) {
                inc += +transactions[i].amount;
            } else {
                exp += +transactions[i].amount;
            }
        }
        setExpense(exp);
        setIncome(inc);
    }, [transactions]);

    return (
        <div 
        // className="inc-exp-container"
        >
            {/* <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">
                    +${income}
                </p>
            </div>
            <div>
                <h4></h4>
                <p id="money-minus" className="money minus">
                    -${-expense}
                </p>
            </div> */}
        </div>
    );
};

export default IncomeExpense;
