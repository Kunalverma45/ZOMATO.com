import React, { useEffect, useState } from "react";
import { fetchCustomers } from "../../api";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const { data } = await fetchCustomers(); // API call
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    getCustomers();
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
