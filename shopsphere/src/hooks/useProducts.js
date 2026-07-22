import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"


const useProducts = () => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        setLoading(true)
        try{
            const data = await getProducts()
            setProducts(data)   
        }catch(error){
            console.log(error)
            setError("error: ", error)
        }
        finally {
        setLoading(false);
    }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error,
    };

}

export default useProducts