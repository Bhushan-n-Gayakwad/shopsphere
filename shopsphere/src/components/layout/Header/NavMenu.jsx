import { NavLink } from "react-router"

const NavMenu = () => {
    return (
        <>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/products" >Products</NavLink>
        </>
    )
}

export default NavMenu