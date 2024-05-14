import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";
import EditProducts from "./pages/EditProducts";
import DelProducts from "./pages/DelProducts";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserContextData from "./context/UserContext";
import Account from "./pages/Account";
import CartContextData from "./context/CartContext";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import ProductsSeller from "./pages/ProductsSeller";
import PaymentComplete from "./pages/PaymentComplete"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <UserContextData>
        <CartContextData>
          <Router>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:catogeryID" element={<Products />} />
              <Route path="/sellerproducts" element={<ProductsSeller />} />
              <Route path="/sellerproducts/add" element={<AddProducts />} />
              <Route
                path="/sellerproducts/edit/:productID"
                element={<EditProducts />}
              />
              <Route
                path="/sellerproducts/delete/:productID"
                element={<DelProducts />}
              />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:orderID" element={<OrderDetail />} />
              <Route path="/payment/:orderID" element={<PaymentComplete />} />
            </Routes>
          </Router>
        </CartContextData>
      </UserContextData>
    </>
  );
}

export default App;
