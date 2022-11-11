import React from 'react';
import Day from './day';

const Month = () => {
    return (
        <div className='month'>
            
            <div className='week'>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
            <div className='week'>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
            <div className='week'>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
            <div className='week'>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
            <div className='week'>
                <Day />
                <Day />
                <Day />
            </div>
        </div>
    );
};

export default Month;