import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import EditProducts from "./pages/EditProducts";
import DelProducts from "./pages/DelProducts";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/add' element={<AddProducts />}/>
          <Route path='/products/edit/:productID' element={<EditProducts />}/>
          <Route path='/products/delete/:productID' element={<DelProducts />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contactus' element={<ContactUs />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
