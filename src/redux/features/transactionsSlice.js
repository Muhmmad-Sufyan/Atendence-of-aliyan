import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    transactions: []
}
export const transactionsSlice = createSlice({
    name: 'transactionsSlice',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.transactions = [...state.transactions, action.payload]
        },
        deleteTransaction: (state, action) => {
            state.transactions = state.transactions
                .filter(transaction => transaction.id != action.payload)
        },
        loadTransactions: (state, action) => {
            state.transactions = action.payload;
        }
    }
})
export const { addTransaction, deleteTransaction, loadTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;

export const deleteTransactionAction = (id) => dispatch => {
    axios.delete(`http://localhost:8000/transactions/${id}`).
        then(res => {
            dispatch(deleteTransaction(id))
        })
}

export const loadTransactionsAction = () => dispatch => {
    axios.get('http://localhost:8000/transactions')
        .then(res => {
            dispatch(loadTransactions(res.data))
        })
}

export const addTransactionAction = (transaction) => dispatch => {
    axios.post('http://localhost:8000/transactions', transaction)
        .then(res => {
            dispatch(addTransaction(res.data))
        })
}