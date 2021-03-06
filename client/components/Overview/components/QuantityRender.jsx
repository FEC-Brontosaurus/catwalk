/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/QuantityStyles.css';

//  made to render to the screen
//  if there is no valid current size it will render ------ and nothing else in list
//  otherwise it will render the list possible quantities
//  if the user changes sizes it will re-select to display select select quantity
//  this essentially will reset the displayed quantity everytime a new size is chosen
const QuantityRender = ({
  quantityArray, setCurrentQuantity, currentSize, currentQuantity, LogClick,
}) => (
  <div id="quantity-container" data-testid="quantity-container">
    {(currentSize)
      ? (
        <select
          id="quantity-select-valid"
          data-testid="quantity-select-valid"
          defaultValue="DEFAULT"
          onClick={() => LogClick('select', 'Overview')}
          onChange={(event) => {
            setCurrentQuantity(event.target.value);
          }}
        >
          {currentQuantity ? <option value="DEFAULT" disabled hidden>-</option>
            : <option value="DEFAULT" data-testid="placeholder" selected disabled hidden>-</option>}
          {quantityArray.map((quantity, idx) => (
            <option id="quantity-option-valid" data-testid="quantity-option-valid" onClick={() => LogClick('option', 'Overview')} key={quantity + idx} value={quantity}>{quantity}</option>
          ))}
        </select>
      )
      : <select id="quantity-select-invalid" disabled value="disabled"><option id="quantity-option-invalid" value="disabled" disabled hidden>-</option></select>}
  </div>
);

export default QuantityRender;
