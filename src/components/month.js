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
                <Day value='1' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='2' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='3' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='4' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='5' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='6' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='7' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
            </div>
            <div className='week'>
                <Day value='8' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='9' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='10' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='11' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='12' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='13' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='14' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
            </div>
            <div className='week'>
                <Day value='15' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='16' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='17' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='18' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='19' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='20' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='21' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
            </div>
            <div className='week'>
                <Day value='22' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='23' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='24' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='25' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='26' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='27' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='28' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
            </div>
            <div className='week'>
                <Day value='29' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='30' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
                <Day value='31' setMonthlyExpenses={setMonthlyExpenses} monthlyExpenses={monthlyExpenses} setMonthlyStatus={setMonthlyStatus} />
           </div>
        </div>
    );
};

export default Month;