// src/ChangeValueButton.jsx
import React from 'react';

const ChangeValueButton = ({ changeValue, label }) => {
    return <button onClick={changeValue}>{label}</button>;
};

export default ChangeValueButton;
