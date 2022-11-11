import { ActionTypes } from "../constants/action-types";

export const setBudget = (nr) => {
    return {
        type: ActionTypes.SET_BUDGET,
        payload: nr
    }
}

export const addExpense = (nr) => {
    return {
        type: ActionTypes.ADD_EXPENSE,
        payload: nr
    }
}