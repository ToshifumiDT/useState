// src/RandomValueComponent.jsx
import React, { useState } from 'react';
import ChangeValueButton from './ChangeValueButton';

const RandomValueComponent = () => {
    const [value, setValue] = useState("Initial Value");

    const valuesArray = ["1", "2", "3", "4"];

    const changeValueRandomly = () => {
        const randomValue = valuesArray[Math.floor(Math.random() * valuesArray.length)];
        setValue(randomValue);
    };

    const changeValueToSpecific = (specificValue) => () => {
        setValue(specificValue);
    };

    return (
        <div>
            <p>Current value: {value}</p>
            <ChangeValueButton changeValue={changeValueRandomly} label="Change Value Randomly" />
            {valuesArray.map((val, index) => (
                <ChangeValueButton key={index} changeValue={changeValueToSpecific(val)} label={`Change Value to ${val}`} />
            ))}
        </div>
    );
};

export default RandomValueComponent;
