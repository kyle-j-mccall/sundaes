import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants';

const OrderDetails = createContext();

// create custom hook to check whether we're in a provider

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error('useOrderDetails must be called from withing an orderDetailsProvider');
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    //make a copy of existing state
    const newoptionCounts = { ...optionCounts };

    //update the copy with the new info
    newoptionCounts[optionType][itemName] = newItemCount;

    //update the state with updated copy
    setOptionCounts(newoptionCounts);
  }

  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }

  //utility function to derive the totals from the optionCounts state value

  function calculateTotal(optionType) {
    // get an array of counts for the option type
    const countsArray = Object.values(optionCounts[optionType]);

    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    //multiply the total number of items by the price for this item type

    return totalCount * pricePerItem[optionType];
  }

  const totals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  };

  const value = { optionCounts, totals, updateItemCount, resetOrder };
  return <OrderDetails.Provider value={value} {...props} />;
}
