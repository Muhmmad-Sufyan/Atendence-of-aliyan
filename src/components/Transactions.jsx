import React from "react";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";

const Transactions = () => {
    const transactions = useSelector((state) => state.transaction.transactions);
    return (
        <>
            <h3>Attendance History</h3>
            <ul id="list" className="list">
                {transactions.map((transaction) => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </>
    );
};

export default Transactions;

