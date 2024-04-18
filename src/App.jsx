import { useEffect } from "react";
import {
    AddTransaction,
    Balance,
    Header,
    IncomeExpense,
    Transactions,
} from "./components";
import { useDispatch } from "react-redux";
import { loadTransactionsAction } from "./redux/features/transactionsSlice";

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadTransactionsAction());
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <Transactions />
                <AddTransaction />
            </div>
        </>
    );
}

export default App;
