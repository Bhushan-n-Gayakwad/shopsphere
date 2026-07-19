import HeaderActions from "./HeaderActions"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import SearchBar  from "./SearchBar"


const Header = () =>{    
   return (
        <header>
            <Logo/>
            <SearchBar/>
            <NavMenu/>
            <HeaderActions/>
        </header>
   )
}

export default Header


// SearchBar will have its own state.
// NavMenu will become responsive.
// HeaderActions will show cart and wishlist counts.
// Logo may include an image and branding.