import axios from "axios"   

// Get All Products
const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products")
    return response.data
} 

// Get Product by ID
const getProduct = async (id) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`)
    return response.data
}




export { 
    getProducts, 
    getProduct 
};
    
    
    
// Think:

// The service's job is to fetch data.
// The component's job is to display data.

// This is called Separation of Concerns.