export default function Home(props) {
  const { email,  checkAuth } = props;
 
  return (
    <div className="flex flex-col items-center justify-center w-full">
        
        <p className="text-gray-500 text-center sm:text-lg md:text-xl lg:text-2xl mt-4 mb-4">
            Welcome {"   "}
            <span className=" text-[#84C7AE] text:bg-[#2ac28a] cursor-pointer">
              { email }
            </span>
          </p>
        <button
            className="bg-[#84C7AE] hover:bg-[#2ac28a] text-white font-semibold p-4 sm:text-lg lg:text-2xl rounded-3xl focus:outline-none focus:shadow-outline lg:w-3/5 md:1/2 sm:w-full"
            onClick={(e) => {
              e.preventDefault();
             checkAuth(false)
            }}
            type="button"
          >
            Logout
          </button>
     
    </div>
  );
}
