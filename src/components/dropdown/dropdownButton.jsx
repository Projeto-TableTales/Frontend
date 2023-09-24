import React, { useState } from "react";
import { CustomSelect } from "./styled";

function DropdownButton({ options, placehouder, setData }) {

  const handleSelect = (event) => {
    setData(event.target.value);
  };

  return (
    <CustomSelect className="form-select" onChange={handleSelect}>
      <option disabled selected>{placehouder}</option>
      {options.map((option, index) => (
        <option value={option} key={index}>{option}</option>
      ))}
    </CustomSelect>
  );
}

export default DropdownButton;
