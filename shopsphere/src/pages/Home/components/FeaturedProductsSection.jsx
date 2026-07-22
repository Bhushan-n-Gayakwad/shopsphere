import ProductCard from "../../../components/product/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/productService";


const FeaturedProductsSection = () => {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    setLoading(true)
    try{
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }catch(error){  
      console.error(error)
      setError("Failed to load products")
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchProducts();
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    
      products.map((product) => 
      <ProductCard 
            key={product.id}            
            name={product.name}
            price={product.price} 
            rating={product.rating} 
       />)

    // The key prop helps React uniquely identify list items so it can efficiently update only the changed elements during re-rendering.
    // Props make components reusable by allowing us to pass dynamic data from a parent component instead of hardcoding values inside the component.
    
  )



};

export default FeaturedProductsSection;