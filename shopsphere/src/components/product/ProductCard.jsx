import Button from "../common/Button"
import { Link } from "react-router"

const ProductCard = ({ id, name, price, rating }) => {
    return (
        <Link to={`/productS/${id}`} >
            <div>
                <h1>Product Image</h1>
                <h2>{name}</h2>
                <h2>₹ {price}</h2>
                <h2>⭐ {rating}</h2>
                <Button text="Add to Cart" />
            </div>
        </Link>
    )
}

export default ProductCard