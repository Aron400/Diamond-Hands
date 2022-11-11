import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from '../redux/actions/actions';

const Day = () => {
    const [dailyExpense, setDailyExpense] = useState(0)

    const dispatch = useDispatch();

    function combo() {
        dispatch(addExpense(enteredExpense));
        setDailyExpense(enteredExpense)
    }    

    let yearlyBudget = useSelector(state => state.budget);
    let monthlyBudget = yearlyBudget/12;
    let dailyBudget = monthlyBudget/31;

    let enteredExpense;
    let updateExpense = (e) => {
        enteredExpense = e.target.value;
    }

    return (
        <div className='day'>
            <div className='inner'>day</div>
            <div className='inner'>Budget: {dailyBudget.toFixed(2)}</div>
            <div className="inner">Spent: {dailyExpense}</div>
            <div className='inner'>Status</div>
            <form className='expense'>
                <div className="field">
                    <input 
                        type="integer" 
                        name="expense" 
                        placeholder="0"
                        value={enteredExpense}
                        onChange={ (e) => updateExpense(e) }   
                    />
                    <input 
                        type="text" 
                        name="expense-description" 
                        placeholder="description"   
                    />
                </div>
                <button type='button' onClick={combo}
                >Add expense</button>
            </form>
            
        </div>
    );
};

export default Day;