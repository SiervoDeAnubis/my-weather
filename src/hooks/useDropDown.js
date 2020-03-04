import React, { useState } from "react";

const useDropDown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => {
    <label id={id}>
      {label}
      <select
        id={id}
        value={state}
        disabled={!options.length}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>;
  };

  return [state, Dropdown];
};

export default useDropDown;
