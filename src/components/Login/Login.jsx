import { useState } from "react";

export default function Login(props) {
  const { user, checkAuth } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === user.email && password === user.password) {
      alert("You are logged in successfully!");
      setEmail("");
      setPassword("");
      checkAuth(true);
    } else {
      checkAuth(false);
      alert("You are not logged in!");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="max-sm:text-xl text-[1.8rem] sm:text-3xl md:text-5xl font-bold p-4">
        Create An Account
      </h1>
      <p className="text-gray-500 text-center sm:text-lg md:text-xl lg:text-2xl">
        Create an account to enjoy all the services without any ads for free!
      </p>
      </div>
      <form className="w-full space-y-4 pt-4 sm:space-y-8">
        <div className="">
          <input
            className="shadow appearance-none border leading-1 sm:leading-1.5 border-gray-300 sm:text-2xl text-lg rounded-xl w-full p-3 sm:p-5 text-gray-700 focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>
        <div className="">
          <input
            className="shadow appearance-none border leading-1 sm:leading-1.5 border-gray-300 sm:text-2xl text-lg rounded-xl w-full p-3 sm:p-5 text-gray-700 focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <button
            className="bg-[#84C7AE] hover:bg-[#2ac28a] text-white font-semibold p-2 sm:p-4 sm:text-lg lg:text-2xl rounded-3xl focus:outline-none focus:shadow-outline lg:w-3/5 md:1/2 sm:w-full"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            type="button"
          >
            Create An Account
          </button>
          <p className="text-gray-500 text-center sm:text-lg md:text-xl lg:text-2xl mt-4">
            Already have an account?{"   "}
            <span className=" text-[#84C7AE] text:bg-[#2ac28a] cursor-pointer" onClick={() => alert("Redirect to login page")}>
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
