import React from 'react';

const Switch = ({ checked, onToggle }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
