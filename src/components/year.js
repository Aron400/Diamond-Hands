import React from 'react';
import Month from './month';
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { setBudget, addExpense } from '../redux/actions/actions';


const Year = () => {

    const dispatch = useDispatch();

    let yearlyBudget = useSelector(state => state.budget);
    let yearlyExpenses = useSelector(state => state.expenses);

    let monthlyBudget = yearlyBudget/12;
    let enteredBudget;

    let updateBudget = (evt) => {
        enteredBudget = evt.target.value;
    };

    console.log(yearlyBudget);
    return (
        <div className='year'>
            <form className='year-budget-form'>
                <div className="field">
                    <label>Enter Yearly Budget</label>
                        <input 
                            type="integer" 
                            name="budget" 
                            placeholder="1000"
                            value={enteredBudget}
                            onChange={ (e) => updateBudget(e) }
                             
                        />
                        <button type="button" onClick={() => dispatch(setBudget(enteredBudget))}>Enter</button>
                </div>
            </form>
            <div className='year-inner'>
                <h2>Yearly budget: ${yearlyBudget}</h2>
                <h2>Yearly expenses: ${yearlyExpenses}</h2>
                <h2><u>January</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>February</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>March</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>April</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>May</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>June</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>July</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>August</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
                <Month />
                <h2><u>September</u></h2>
                    <h3>Monthly budget: ${monthlyBudget.toFixed(2)}</h3>
                    <h3>Monthly expenses: $</h3>
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
                    <h3>Monthly expenses: $</h3>
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