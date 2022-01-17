import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
    return (
        <>
        <Counter start={17} interval={1000} />
        <Counter start={-50} interval={1}/>
        <Counter start={150} interval={10}/>
        </>
        
    );
};

export default App;