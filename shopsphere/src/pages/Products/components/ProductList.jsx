import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";
import ProductCard from "../../../components/product/ProductCard";


const ProductList = ({searchTerm}) => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const filterProducts = products.filter((product)=> 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()))


    const fetchProducts = async () => {
        setLoading(true)
        try{
            const data = await getProducts()
            setProducts(data)   
            setLoading(false)
        }catch(error){
            console.log(error)
            setError("error: ", error)
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchProducts();
    }, [])


    if (error) {
        return <h1>{error}</h1>
    }
    if (loading) {
        return <h1>Loading...</h1>
    }

    console.log(error)
    console.log(loading)

    console.log("searchTerm inside product list ", searchTerm)

    return (
        filterProducts.map((product)=>(
            <ProductCard key={product.id}            
            name={product.name}
            price={product.price} 
            rating={product.rating} />
         ) )
    )
}

export default ProductList