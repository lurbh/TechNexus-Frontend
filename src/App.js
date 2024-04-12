import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/add' element={<AddProducts />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
