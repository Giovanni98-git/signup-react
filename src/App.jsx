import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

import React, { useEffect, useState } from "react";

function App() {
  const USER = {
    email: "gvnnmarc@gmail.com",
    password: "12345678",
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, [isAuthenticated]);

  return (
    <>
      <div className="h-screen w-full bg-[#84C7AE] flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center lg:w-1/3 sm:w-4/5 md:3/5 md:m-[10%] sm:m-[8%] m-[5%] bg-gray-200 p-8 rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-5xl ">
          {
            isAuthenticated ? (
              <Home email={USER.email} checkAuth={setIsAuthenticated} />
            ) : (
              <Login user={USER} checkAuth={setIsAuthenticated} />
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
