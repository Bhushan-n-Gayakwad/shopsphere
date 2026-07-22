import Input from "../../common/Input/Input"

const SearchBar = ({value, onChange}) => {
    return (
        // What is the current search text?
        // What should happen when the user types?
        <Input  
            placeholder="search products"
            value={value}
            onChange={onChange}
        />
    )
}

export default SearchBar