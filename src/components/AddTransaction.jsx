import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransactionAction } from "../redux/features/transactionsSlice";

const AddTransaction = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [absent, setAbsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date.trim().length > 0) {
            const comingTime = absent ? "Absent" : text;
            const goingTime = absent ? "Absent" : amount;
            dispatch(addTransactionAction({ comingTime, goingTime, date, absent }));
            setText('');
            setAmount('');
            setDate('');
            setAbsent(false);
        } else {
            alert('Please enter a valid date');
        }
    };

    return (
        <>
            <h3>Add new Attendance</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="absent">Absent</label>
                    <input
                        type="checkbox"
                        checked={absent}
                        onChange={(e) => setAbsent(e.target.checked)}
                    />
                </div>
                {!absent && (
                    <>
                        <div className="form-control">
                            <label htmlFor="text">Coming time</label>
                            <input
                                type="text"
                                placeholder="Enter Coming time..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="amount">Going time</label>
                            <input
                                type="text"
                                placeholder="Enter Going time..."
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </>
                )}
                <button type="submit" className="btn">
                    Add Attendance
                </button>
            </form>
        </>
    );
};

export default AddTransaction;
