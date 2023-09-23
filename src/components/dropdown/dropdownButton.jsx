import React, { useState } from "react";
import { Container, CustomSelect } from "./styled";

function DropdownButton({ options }) {
  const [value, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <CustomSelect className="form-select" onChange={handleSelect}>
      {options.map((option, index) => (
        <option value={index}>{option} </option>
      ))}
    </CustomSelect>
  );
}

export default DropdownButton;
