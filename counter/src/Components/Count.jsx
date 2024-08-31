import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('Button clicked');
        setCount(count + 1);
    }

    return (
        <>
            <h1>Count me</h1>
            <button onClick={handleClick}>Click me!!</button>
            <h2>The Count is {count}</h2>
        </>
    );
}

export default Count;
