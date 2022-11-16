import React, { useState } from 'react';
import Day from './day';


const Month = () => {
    const [dayNumber, setDayNumber] = useState(0)
    const [monthlyExpenses, setMonthlyExpenses] = useState(0)
    const [monthlyStatus, setMonthlyStatus] = useState();

    //get dailyExpense, add them all up to become monthly expense

    //backup plan make monthly and daily expense declared state in app.js

    return (
        <div className='month'>
            <h3>Monthly expenses: ${monthlyExpenses}</h3>
            <h3>Monthly Status: {monthlyStatus}</h3>
            
            <div className='week'>
                <Day dayNumber={1} setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day dayNumber={2} setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day dayNumber={3} setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
            </div>
            {/* <div className='week'>
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
            </div>
            <div className='week'>
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
            </div>
            <div className='week'>
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
            </div>
            <div className='week'>
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
                <Day className='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} />
            </div> */}
        </div>
    );
};

export default Month;