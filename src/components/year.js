import React, { useState, useEffect, useRef } from 'react';
import Month from './month';
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { setBudget, addExpense } from '../redux/actions/actions';


const Year = () => {

    const dispatch = useDispatch();
    const firstRef = useRef(null);
    const [yearlyStatus, setYearlyStatus] = useState();
    
    function emojiYear(budget, expenses) {
        if (budget >= expenses) {
            setYearlyStatus('😁💸')
        } else {
            setYearlyStatus('☹️📉')
        }
    }

    let yearlyBudget = useSelector(state => state.budget);
    let yearlyExpenses = useSelector(state => state.expenses);
    console.log(yearlyExpenses)

    useEffect(() => {
        emojiYear(yearlyBudget, yearlyExpenses)
    }, [yearlyExpenses]);

    let monthlyBudget = yearlyBudget/12;
    let enteredBudget;

    let updateBudget = (evt) => {
        enteredBudget = evt.target.value;
    };
    
    function combo() {
        //() => dispatch(setBudget(enteredBudget));
        firstRef.current.value = '';
    }

    return (
        <div className='year'>
            <form className='year-budget-form'>
                <div className="field">
                    <label>Enter Yearly Budget</label>
                        <input 
                            ref={firstRef}
                            type="integer" 
                            name="budget" 
                            placeholder="0"
                            value={enteredBudget}
                            onChange={ (e) => updateBudget(e) }
                             
                        />
                        <button type="button" onClick={() => { dispatch(setBudget(enteredBudget)); combo()}}>Enter</button>
                </div>
            </form>
            <div className='year-inner'>
                <h2>Yearly budget: ${yearlyBudget}</h2>
                <h2>Yearly expenses: ${yearlyExpenses}</h2>
                <h2>Yearly Status: {yearlyStatus}</h2>
                <h2><u>January</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>February</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>March</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>April</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>May</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>June</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>July</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>August</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>September</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
                <h2><u>October</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>November</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>December</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                <Month />
            </div>
        </div>
    );
};

// export default Year;
function mapStateToProps(state) {
    return {
      budget: state.budget
    };
  }

export default connect(mapStateToProps)(Year);