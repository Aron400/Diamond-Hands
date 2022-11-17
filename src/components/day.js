import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from '../redux/actions/actions';
import Month from './month';

const Day = (props) => {
    const [dailyExpense, setDailyExpense] = useState(0);
    const [dailyStatus, setDailyStatus] = useState();

    const dispatch = useDispatch();

    const dayNumber = 1;
    const firstRef = useRef(null);
    const lastRef = useRef(null);

    function combo(e) {
        console.log(enteredExpense)
        dispatch(addExpense(enteredExpense));
        let addedDay = parseInt(dailyExpense) + parseInt(enteredExpense);
        let addedMonth = parseInt(props.monthlyExpenses) + parseInt(enteredExpense);
        props.setMonthlyExpenses(addedMonth);

        setDailyExpense(addedDay);
        emojiDay(dailyBudget, addedDay);
        emojiMonth(monthlyBudget, addedMonth);
        
        firstRef.current.value = '';
        lastRef.current.value = '';
    }

     function emojiDay(budget, expenses) {
        //console.log('emoji', budget, expenses)
        if (budget >= expenses) {
            setDailyStatus('😁💸')
        } else {
            setDailyStatus('☹️📉')
        }
    }

    function emojiMonth(budget, expenses) {
        console.log('emoji', budget, expenses)
        if (budget >= expenses) {
            props.setMonthlyStatus('😁💸')
        } else {
            props.setMonthlyStatus('☹️📉')
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
            <div className='inner'>{props.value}💎</div>
            <div className='inner'>Budget: ${dailyBudget.toFixed(2)}</div>
            <div className="inner">Spent: ${dailyExpense}</div>
            <div className='inner'>Status: {dailyStatus}</div>
            <form className='expense'>
                <div className="field">
                    <input 
                        ref={firstRef}
                        type="integer" 
                        name="expense" 
                        placeholder="0"
                        value={enteredExpense}
                        onChange={ (e) => updateExpense(e) }  
                    />
                    <input 
                        ref={lastRef}
                        type="text" 
                        name="expense-description" 
                        placeholder="description"   
                    />
                </div>
                <button type='button' onClick={combo }>Add expense</button>
                

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