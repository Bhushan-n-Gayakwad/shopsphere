import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductSearch from "./components/ProductSearch";


const Products = () => {

const [searchTerm, setSearchTerm] = useState("")

const handleSearch = (event) =>{

  setSearchTerm(event.target.value)
}


console.log(searchTerm);
  
  return (
    <>
      <h1>Products Page</h1>
      <ProductSearch value={searchTerm} onChange={handleSearch} />
      <ProductList searchTerm = {searchTerm} />
    </>
  )
};

export default Products;