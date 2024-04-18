import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransactionAction } from "../redux/features/transactionsSlice";

const Transaction = ({ transaction }) => {
    const dispatch = useDispatch();
    return (
        <div style={{ backgroundColor: 'green' }}>
            <h4 style={{ color: 'white', letterSpacing: '3px', textAlign: 'center', padding: '5px 0px 0px 0px' }}>{transaction.date}</h4>
            <li className={+transaction.amount > 0 ? "plus" : "minus"}>

                {
                    transaction.absent ? <h4 style={{ padding: '5px 90px', color: 'white', backgroundColor: 'red' }}>Today is Absent</h4> : <p>Come <br/>{transaction.comingTime}</p>
                }
                <span>
                    {
                        transaction.absent ? '' : <p>Go<br />{transaction.goingTime}</p>
                    }

                </span>
                <button
                    className="delete-btn"
                    onClick={() =>
                        dispatch(deleteTransactionAction(transaction.id))
                    }
                >
                    x
                </button>
            </li>
        </div>

    );
};

export default Transaction;
