import React from 'react';
import { addExpense } from './features/expense/expenseSlice'
import { useDispatch } from 'react-redux'

import './global.css'

import AddAddress from './components/AddAddress/AddAdress'
import AddNewCard from './components/AddNewCard/AddNewCard'
import Bag from './components/Bag/Bag'
import CheckBag from './components/CheckBag/CheckBag'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import ItemView from './components/ItemView/ItemView'
import OrderSummary from './components/OrderSummary/OrderSummary'
import PaymentMethod from './components/PaymentMethod/PaymentMethod'
import ReviewYourBag from './components/ReviewYourBag/ReviewYourBag'
import Searchbar from './components/Searchbar/Searchbar'
import SelectCard from './components/SelectCard/SelectCard'
import ShippingAddress from './components/ShippingAddress/ShippingAddress'

function App() {

  const dispatch = useDispatch()

  return (
    <div onClick={() =>dispatch(addExpense())} // addExpense function which we got from store with dispatch hook
    className="App">

      {/* Tools */}

      {/* <AddAddress /> */}
      {/* <AddNewCard /> */}
      {/* <Bag /> */}
      {/* <CheckBag /> */}
      <Dashboard />
      {/* <Header /> */}
      {/* <ItemView /> */}
      {/* <OrderSummary /> */}
      {/* <PaymentMethod /> */}
      {/* <ReviewYourBag /> */}
      {/* <Searchbar /> */}
      {/* <SelectCard /> */}
      {/* <ShippingAddress /> */}
    </div>
  );
}

export default App;
