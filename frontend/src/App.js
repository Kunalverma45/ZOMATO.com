import React from "react";
import RestaurantsList from "./components/restaurant/RestaurantsList";
import AddRestaurant from "./pages/AddRestaurant";
import AddCustomer from "./pages/AddCustomer";
import CustomerList from "./components/customer/CustomerList";

const App = () => {
  return (
    <div>
      <h1>Zomato Clone</h1>
      <RestaurantsList />
      <AddRestaurant />
      <CustomerList />
      <AddCustomer />
    </div>
  );
};

export default App;
