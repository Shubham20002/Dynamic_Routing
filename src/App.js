import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Item from "./component/item";
import Itempage from "./component/itempage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const route=createBrowserRouter([
    {path:'/',element:<Navbar/>,children:[{path:'/',element:<Home/>},
    {path:"/about",element:<About/>},{path:"/item",element:<Item/>},{path:"/item/:id",element:<Itempage/>},]} 
  ])
  return (
   <>
  

   <RouterProvider router={route}/>

   </>
  );
}

export default App;
