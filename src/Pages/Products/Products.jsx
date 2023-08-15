import React, { useEffect, useState } from "react";
import Loading from "../../Components/Utils/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Products() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const apiUrl = "https://dummyjson.com/auth/products";
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchData();
    } // eslint-disable-next-line
  }, [token]);

  const fetchData = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  const columnDefs = [
    { headerName: "ID", field: "id", floatingFilter: true, filter: true },
    {
      headerName: "Title",
      field: "title",
      floatingFilter: true,
      filter: true,
    },
    {
      headerName: "Price",
      field: "price",
      floatingFilter: true,
      filter: true,
    },
  ];

  if (loading) return <Loading />;
  return (
    <section className="w-full h-full p-4 flex justify-center relative">
      <div className="ag-theme-alpine" style={{ width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} domLayout="autoHeight" />
      </div>
    </section>
  );
}

export default Products;
