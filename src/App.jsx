import Login from "./pages/Login/Login";
import avatar from "./assets/img.jpg";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  const USER = {
    username: "Giovanni",
    avatar: avatar,
    password: "12345678",
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              username={USER.username}
              password={USER.password}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route 
        path="/home"
        element= {
          <Home username={USER.username} setIsAuthenticated={setIsAuthenticated} avatar={USER.avatar} isAuthenticated={isAuthenticated}/>
        }/>
        <Route
          path="/products/:id"
          element={
            <ProductDetails username={USER.username} setIsAuthenticated={setIsAuthenticated} avatar={USER.avatar} isAuthenticated={isAuthenticated}/>
          } />
      </Routes>
    </>
  );
}

export default App;
