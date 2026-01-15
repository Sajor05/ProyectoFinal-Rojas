import "./Navbar.css"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav className="navbar flex gap-10 p-4">
            <Logo/>
            <div className="flex gap-100 p-5">
                <div className="nav-links flex gap-13">
                    <NavLinkPath pathLink="menu"/>
                    <NavLinkPath pathLink="cafe"/>
                    <NavLinkPath pathLink="experiencia"/>
                </div>
                <div className="nav-locate-container hover:text-[#00754a]">
                    <NavLink className="font-bold">Localizar Tienda</NavLink>
                </div>       
            </div>
        </nav>
    )
}

const NavLinkPath = ({pathLink}) => {
    return(
        <div className="nav-menu-link-container">
            <NavLink to={`/${pathLink}`} className="navbar-brand hover:text-[#00754a]">
                <span className="uppercase font-bold">{pathLink}</span>
            </NavLink>
        </div>
    )
}

const Logo = () => {
    return(
        <div className="navbar-brand-container">
            <NavLink to="/" className="navbar-brand">
                <img 
                    src="https://www.starbucks.com.ar/static/images/logo.svg" 
                    alt="Starbucks logo"
                    className="w-13 h-13"
                />
            </NavLink>
        </div>
    )
}