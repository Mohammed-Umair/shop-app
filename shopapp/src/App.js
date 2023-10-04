import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace={true} /> : <Login />}
          />
          <Route
          path="/register"
          element={user ? <Navigate to="/" replace={true} /> : <Register />}
        />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {user ? <Redirect to="/" /> : <Login />}
