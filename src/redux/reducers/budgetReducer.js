import { ActionTypes } from "../constants/action-types";

const initialState = {
    budget: 12000,
    expenses: 0
}

export const budgetReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BUDGET:
            return {
               ...state,
                budget: parseInt(payload)
            };

        case ActionTypes.ADD_EXPENSE:
            return {
                ...state,
                expenses: state.expenses + parseInt(payload)
            };
    
        default:
            return state;
    }
}