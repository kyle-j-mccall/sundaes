import React from 'react';
import SummaryForm from './SummaryForm';

export default function OrderSummary() {
  return (
    <div>
      <div className="title-container">
        <h2>Order Summary</h2>
      </div>
      <div className="scoops-container">
        <h3>Scoops:</h3>
        <ul>
          <li>filler</li>
        </ul>
      </div>
      <div className="toppings container">
        <h3>Toppings:</h3>
        <ul>
          <li>filler</li>
        </ul>
        <div className="total-container">
          <h3>Total:</h3>
        </div>
        <div className="summary-form-container">
          <SummaryForm />
        </div>
      </div>
    </div>
  );
}
