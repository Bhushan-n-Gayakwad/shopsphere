import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getProduct } from "../../services/productService";

const ProductDetails = () =>{

    const {id} = useParams();

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProduct = async () => {
        setLoading(true)
        try{
            const data = await getProduct(id)
            setProduct(data)
            setLoading(false)
        }catch(error){
            setLoading(false)
            setError(error)
        }
    }

    useEffect(()=>{
        fetchProduct()
    }, [id])

    console.log(id)

    if(loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Something went wrong</h1>
    }

    return (
        <>
            {product.name}
            {product.price}
            {product.rating}
        </>
            
        
    )
}

export default ProductDetails