import React from "react";
import { ReactComponent as CaretDownI } from "assets/down-arrow.svg";

const FilterForm = ({ inputInfos, optionsArray, handlers }) => {
  return (
    <form>
      <label htmlFor={inputInfos.id}>{inputInfos.label}</label>
      <CaretDownI />
      <select name={inputInfos.label} id={inputInfos.id} onChange={handlers}>
        {optionsArray.map((option) => {
          return (
            <option value={option.text} key={option.id} id={option.id}>
              {option.text}
            </option>
          );
        })}
      </select>
    </form>
  );
};
export default FilterForm;
