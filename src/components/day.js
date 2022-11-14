import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from '../redux/actions/actions';
import Month from './month';

const Day = () => {
    const [dailyExpense, setDailyExpense] = useState(0);
    const [dailyStatus, setDailyStatus] = useState();

    const dispatch = useDispatch();

    // function combo() {
    //     dispatch(addExpense(enteredExpense));
    //     setDailyExpense(parseInt(dailyExpense) + parseInt(enteredExpense));
    //     emoji(dailyBudget, dailyExpense);
        
    // }

    function combo() {
        setTimeout(function () {
            emoji(dailyBudget, dailyExpense);
        },2000)
        dispatch(addExpense(enteredExpense));
        setDailyExpense(parseInt(dailyExpense) + parseInt(enteredExpense));
        
        
    }

     function emoji(budget, expenses) {
        console.log('emoji')
        if (budget >= expenses) {
            setDailyStatus('😁')
        } else {
            setDailyStatus('☹️')
        }
    }

    let yearlyBudget = useSelector(state => state.budget);
    let monthlyBudget = yearlyBudget/12;
    let dailyBudget = monthlyBudget/31;

    let enteredExpense;
    let updateExpense = (e) => {
        enteredExpense = parseInt(e.target.value);
    }
    

    return (
        <div className='day'>
            <div className='inner'>day</div>
            <div className='inner'>Budget: {dailyBudget.toFixed(2)}</div>
            <div className="inner">Spent: {dailyExpense}</div>
            <div className='inner'>Status: {dailyStatus}</div>
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

// Recycle

// function emoji(budget, expenses) {
        
    //     if (budget >= expenses) {
    //         fetch('https://emoji-api.com/emojis/beaming-face-with-smiling-eyes?access_key=32711b086611a9e5e79292eb8ca256b2e9abd45b')
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data)
    //                 //setDailyStatus(data.slug)
    //             })
    //     } else {
    //         fetch('https://emoji-api.com/emojis/frowning-face?access_key=32711b086611a9e5e79292eb8ca256b2e9abd45b')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 dailyStatus: data.slug
    //             })
    //         })
    //     }
    // }