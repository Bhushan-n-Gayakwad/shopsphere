import Input from "../../../components/common/Input/Input"

const ProductSearch = ({value, onChange}) => {
    return (
        <Input type="text" value={value} onChange={onChange}  placeholder="Search products..." />
    )   
}

export default ProductSearch