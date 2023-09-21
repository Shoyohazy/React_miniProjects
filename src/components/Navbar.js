
import { useState } from "react";
const Logo = () => (
    <img
        className="logo"
        alt="logo"
        src="https://logos.flamingtext.com/Name-Logos/Ziggy-design-fluffy-name.png"
    />
)

const Navbar = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    return (
        <div className="Header">
            <Logo />
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About us</li>
                    <li>contacts</li>
                    <li>cart</li>
                </ul>
                {isLoggedIn ? 
                (<button onClick={() => setIsLoggedIn(false)}>Logout</button>)
                :(<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
            </div>
        </div>
    )
};

export default Navbar;