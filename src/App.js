import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import EditProducts from "./pages/EditProducts";
import DelProducts from "./pages/DelProducts";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
