import Button from "../common/Button"

const ProductCard = ({name, price, rating}) => {
    return (
        <div>
            <h1>Product Image</h1>
            <h2>{name}</h2>
            <h2>₹ {price}</h2>
            <h2>⭐ {rating}</h2>
            <Button text="Add to Cart" />
        </div>
    )
}

export default ProductCard