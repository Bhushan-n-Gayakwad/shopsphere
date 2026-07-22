import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import ProductCard from "../../../components/product/ProductCard";
import useProducts from "../../../hooks/useProducts";


const ProductList = ({searchTerm}) => {

    const { products, loading, error } = useProducts();


    if (error) {
        return <h1>{error}</h1>
    }
    if (loading) {
        return <h1>Loading...</h1>
    }

    console.log(error)
    console.log(loading)

    console.log("searchTerm inside product list ", searchTerm)

    const filterProducts = products.filter((product)=> 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))


    return (
        filterProducts.map((product)=>(
            <ProductCard key={product.id}       
            id={product.id}     
            name={product.name}
            price={product.price} 
            rating={product.rating} />
         ) )
    )
}

export default ProductList