/* 
  basic design of the app
 ---navbar (logo , (home, about us , contact us , cart))
 ---body (searchbar(for food items) , cards(of food))
 ---footer(links and all that stuff)

*/
import "./style.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return(
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
