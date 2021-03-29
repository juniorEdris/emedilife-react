import React from 'react';
import { useLocation } from 'react-router-dom';

// Currency Formatting
export const currToFixed = (x) => Number.parseFloat(x).toFixed(2);
// make HTML element renderable
export const renderDiv = (rawHTML) =>
  React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });
export const renderSpan = (rawHTML) =>
  React.createElement('span', { dangerouslySetInnerHTML: { __html: rawHTML } });
export const renderDivAttr = (rawHTML) => {
  <div
    dangerouslySetInnerHTML={{
      __html: rawHTML,
    }}></div>;
};

// Get Url parameters
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Short the alphabets
export const Truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '....' : str;
};

// user constnant
const User = localStorage.getItem('user_id');

export const getCartProdSubTotal = (basket) =>
  User
    ? basket?.reduce(
        (amount, item) =>
          parseInt(item.unit_price.price * item.total_quantity) + amount,
        0
      )
    : basket?.reduce(
        (amount, item) => parseInt(item.price * item.total_quantity) + amount,
        0
      );
