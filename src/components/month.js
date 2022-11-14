import React, { useState } from 'react';
import Day from './day';


const Month = () => {

    const [monthlyExpenses, setMonthlyExpenses] = useState(0)
    //get dailyExpense, add them all up to become monthly expense

    //backup plan make monthly and daily expense declared state in app.js

    return (
        <div className='month'>
            <h3>Monthly expenses: {monthlyExpenses}</h3>
            
            <div className='week'>
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
            </div>
            <div className='week'>
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
            </div>
            <div className='week'>
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
            </div>
            <div className='week'>
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
            </div>
            <div className='week'>
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
                <Day setMonthlyExpenses={setMonthlyExpenses} />
            </div>
        </div>
    );
};

export default Month;