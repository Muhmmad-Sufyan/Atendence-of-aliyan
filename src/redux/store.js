import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./features/transactionsSlice";

export const store = configureStore({
    reducer: {
        'transaction': transactionsSlice
    }
})