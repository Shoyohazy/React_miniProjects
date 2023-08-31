/* 
  basic design of the app
 ---navbar (logo , (home, about us , contact us , cart))
 ---body (searchbar(for food items) , cards(of food))
 ---footer(links and all that stuff)

*/

const Logo = () =>(
  <img 
    className = "logo"
    alt = "logo"
    src = "https://logos.flamingtext.com/Name-Logos/Ziggy-design-fluffy-name.png"
  />
)
const Navbar = () =>{
  return(
    <Logo />
  )
};

function App() {
  return(
    <>
      <Navbar />
    </>
  );
}

export default App;
