// src/CounterComponent.jsx
import React, { useState } from 'react';

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const double = () => {
        setCount(prevCount => prevCount * 2);
    };

    const half = () => {
        setCount(prevCount => prevCount / 2);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="p-4 border rounded shadow-md bg-white">
            <p className="text-xl mb-4">Current count: {count}</p>
            <div className="space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={increment}>Increase</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={decrement}>Decrease</button>

                <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={double}>Double</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={half}>Half</button>

                <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default CounterComponent;
