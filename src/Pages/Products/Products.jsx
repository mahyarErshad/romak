import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const apiUrl = "https://dummyjson.com/auth/products";

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchData();
    } // eslint-disable-next-line
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>Products</div>;
}

export default Products;
