

const Logo = () => (
    <img
        className="logo"
        alt="logo"
        src="https://logos.flamingtext.com/Name-Logos/Ziggy-design-fluffy-name.png"
    />
)

const Navbar = () => {
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
            </div>
        </div>
    )
};

export default Navbar;