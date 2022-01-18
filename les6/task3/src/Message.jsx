import React from 'react';

const Massage = ({ text }) => {
    if(!text) {
        return null;
    }
    return (
        <div className='message'>
            {text}
        </div>
    );
};

export default Massage;