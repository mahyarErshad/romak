import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ReactPaginate from "react-paginate";
import Loading from "../../Components/Utils/Loading/Loading";

function Products() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const apiUrl = "https://dummyjson.com/auth/products";
  const productsPerPage = 10;

  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchData();
    }
  }, [token, currentPage]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}?limit=${productsPerPage}&skip=${currentPage * productsPerPage}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setRowData(data.products);
      setTotalProducts(Math.ceil(data.total / productsPerPage));
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const columnDefs = [
    { headerName: "ID", field: "id", floatingFilter: true, filter: true },
    { headerName: "Title", field: "title", floatingFilter: true, filter: true },
    { headerName: "Price", field: "price", floatingFilter: true, filter: true },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="w-full h-full p-4 flex-col gap-8 items-center relative">
      <ReactPaginate pageCount={totalProducts} initialPage={currentPage} marginPagesDisplayed={2} onPageChange={({ selected }) => setCurrentPage(selected)} containerClassName="flex justify-center gap-2 max-md:mt-9 md:mt-16 lg:mt-20" pageClassName="duration-300 bg-white flex-center h-8 w-8 rounded-[0.25rem] border border-gray-400 text-blue-400 cursor-pointer" activeClassName="border-blue-600 text-blue-600 cursor-not-allowed" disabledClassName="opacity-50" />
      <div className="ag-theme-alpine" style={{ width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} domLayout="autoHeight" />
      </div>
    </section>
  );
}

export default Products;
