export default function Header(props) {
    return (
        <div className="flex justify-end p-2">
        <div className="flex items-center mr-4">
          <img
            src={props.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2 text-lg font-semibold">{props.username}</span>
        </div>

        <button
          className="bg-[#84C7AE] hover:bg-[#2ac28a] max-w-sm text-white font-semibold p-1 sm:text-md lg:text-xl rounded-3xl focus:outline-none focus:shadow-outline"
          onClick={(e) => {
            e.preventDefault();
            props.setIsAuthenticated(false);
          }}
          type="button"
        >
          Logout
        </button>
      </div>
    )
 }