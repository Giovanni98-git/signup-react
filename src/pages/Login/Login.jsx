import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const { username, password, setIsAuthenticated } = props;
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [seePassword, setSeePassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      usernameRef.current.value &&
      passwordRef.current.value &&
      usernameRef.current.value === username &&
      passwordRef.current.value === password
    ) {
      alert("You are logged in successfully!");
      setIsAuthenticated(true);
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/home"); // Redirect to home page after successful login
    } else {
      alert("You are not logged in!");
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="h-screen w-full bg-[#84C7AE] flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center lg:w-1/3 sm:w-4/5 md:3/5 md:m-[10%] sm:m-[8%] m-[5%] bg-gray-200 p-8 rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-5xl ">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[1.8rem] sm:text-3xl md:text-5xl font-bold p-4">
              Connexion
            </h1>
          </div>
          <form
            className="w-full space-y-4 pt-4 sm:space-y-8"
            onSubmit={handleLogin}
          >
            <div className="">
              <input
                className="shadow appearance-none border leading-1 sm:leading-1.5 border-gray-300 sm:text-2xl text-lg rounded-xl w-full p-3 sm:p-5 text-gray-700 focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                required
                ref={usernameRef}
                placeholder="Username"
              />
            </div>
            <div className="flex ">
              <input
                className="shadow appearance-none border leading-1 sm:leading-1.5 border-gray-300 sm:text-2xl text-lg rounded-xl w-full p-3 sm:p-5 text-gray-700 focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="Password"
                ref={passwordRef}
                required
                type={seePassword ? "text" : "password"}
              />
              <button
                type="button"
                className="bg-[#84C7AE] hover:bg-[#2ac28a] text-white font-semibold p-2 sm:p-4 rounded-xl focus:outline-none focus:shadow-outline ml-1.5"
                onClick={() => setSeePassword(!seePassword)}
              >
                {seePassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <button
                className="bg-[#84C7AE] hover:bg-[#2ac28a] text-white font-semibold p-2 sm:p-4 sm:text-lg lg:text-2xl rounded-3xl focus:outline-none focus:shadow-outline lg:w-3/5 md:1/2 sm:w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
