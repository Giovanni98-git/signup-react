import Login from "./pages/Login/Login";
import avatar from "./assets/img.jpg";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

import React, { useEffect, useState } from "react";

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
            <div className="h-screen w-full bg-[#84C7AE] flex justify-center items-center">
              <h1 className="text-2xl font-bold text-white">Product Details</h1>
            </div>
          } />
      </Routes>
    </>
  );
}

export default App;
