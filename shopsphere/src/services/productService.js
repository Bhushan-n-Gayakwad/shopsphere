import axios from "axios"   


const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products")
    return response.data
} 


export { getProducts };
    
    
    
// Think:

// The service's job is to fetch data.
// The component's job is to display data.

// This is called Separation of Concerns.