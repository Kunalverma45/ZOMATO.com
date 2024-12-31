import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import GoogleAuthPage from "./pages/GoogleAuthPage";
import RestaurantPage from "./pages/RestaurantPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import CheckoutPage from "./pages/CheckoutPage";
// import AddRestaurantPage from "./pages/AddRestaurantPage";
// import HomePageLayout from "./layouts/HomePageLayout";

// Components
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews";
import Menu from "./components/Restaurant/Menu";
import Photos from "./components/Restaurant/Photos";
import RestaurantLayout from "./layouts/RestaurantLayout";

import Delivery from "./components/Delivery/Delivery";
import Dining from "./components/Dining/Dining";
import NightLife from "./components/NightLife/NightLife";
import Nutrition from "./components/Nutrition/Nutrition";

import RestPage from './components/AddRestaurant/RestPage';
import RegistrationR from './components/AddRestaurant/RegistrationR';
import LoginR from './components/AddRestaurant/LoginR';
import RDashboard from './components/AddRestaurant/R_Dashboard';


function App() {
  return (
    <Routes>
      {/* Dashboard Route */}
      <Route path="/main-page" element={<Dashboard />} />

      {/* HomePage Routes */}
      <Route path="/" element={<Navigate to="/main-page" replace />} />
      <Route path="/Homepage" element={<HomePage />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/night" element={<NightLife />} />
      <Route path="/nutrition" element={<Nutrition />} />

      {/* Google Authentication */}
      <Route path="/google/:token" element={<GoogleAuthPage />} />

      {/* Restaurant Routes */}
      <Route
        path="/restaurant/:id"
        element={
          <RestaurantLayout>
            <RestaurantPage />
          </RestaurantLayout>
        }
      >
        <Route path="overview" element={<Overview />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="menu" element={<Menu />} />
        <Route path="photos" element={<Photos />} />
      </Route>

      {/* Checkout */}
      <Route path="/checkout/orders" element={<CheckoutPage />} />

      {/* Partner/Restaurant Management */}
      <Route path="/partner-with-us/new" element={<RestPage />} />
      <Route path="/partner-with-us" element={<Navigate to="/partner-with-us/new/" replace />} />
      <Route path='/restaurantMainPage' element={<RestPage />} />
      <Route path='/registrationR' element={<RegistrationR />} />
      <Route path='/loginR' element={<LoginR />} />
      <Route path='/dashboard' element={<RDashboard />} />

      {/* Catch-All Fallback for Completely Unknown Paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
