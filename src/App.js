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
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default appRouter;
