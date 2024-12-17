import axios from "axios";

// Set the base URL for your backend
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Restaurant APIs
export const fetchRestaurants = () => API.get("/restaurants");
export const addRestaurant = (newRestaurant) => API.post("/restaurants", newRestaurant);

// Customer APIs
export const fetchCustomers = () => API.get("/users");
export const addCustomer = (newCustomer) => API.post("/users", newCustomer);

export default API;
