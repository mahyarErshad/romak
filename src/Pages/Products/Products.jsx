import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Products() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const apiUrl = "https://dummyjson.com/auth/products";

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchData();
    } // eslint-disable-next-line
  }, [navigate, token]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRowData(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Title", field: "title" },
    { headerName: "Price", field: "price" },
  ];

  return (
    <section className="w-full h-full p-4 flex justify-center">
      <div className="ag-theme-alpine" style={{ height: "auto", width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} domLayout="autoHeight" />
      </div>
    </section>
  );
}

export default Products;
