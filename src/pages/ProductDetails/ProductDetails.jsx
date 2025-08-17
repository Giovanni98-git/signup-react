import { useEffect } from "react";
import Header from "../../components/Header";
import productsList from "../../assets/productsData.json";
import { useParams, Link, useNavigate  } from "react-router-dom";
import { Stars } from "../../components/Cards";

export default function ProductDetails(props) {
  const { username, avatar, setIsAuthenticated, isAuthenticated } = props;

   const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const { id } = useParams();
  const product = productsList.products.find((p) => p.id === parseInt(id));
  return (
    <div className="min-h-[100vh] w-full bg-[#84C7AE] flex flex-col gap-4 pb-8">
      <Header
        username={username}
        avatar={avatar}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className="flex flex-col items-center h-full w-full ">
        <div className=" w-[98%] sm:w-[96%] md:w-[94%] flex gap-4  sm:p-3 md:p-5 justify-center md:justify-baseline items-center bg-[#F0F0F0] rounded-2xl shadow-lg">
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:p-6 w-11/12 ">
            <div className="md:w-1/2 w-full flex flex-col space-y-4 p-2 sm:p-6">
              <Link to="/home">
                <button className="bg-blue-500 text-white sm:px-4 px-2 sm:py-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300">
                  Back to Products
                </button>
              </Link>
              <img
                className="rounded-lg w-full h-[500px] object-cover"
                src={product.image_url}
                alt={product.name}
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col space-y-4 p-2 sm:p-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-md text-gray-700">{product.description}</p>
              <div className="flex justify-between items-center text-md font-medium">
                <span className="text-gray-700">{product.category}</span>
                <span className="text-gray-700 ">{product.price}$</span>
              </div>
              <div className="flex items-center gap-2 max-w-max">
                <Stars rating={product.stars} />
                <span className="text-gray-500 text-md">({product.stars})</span>
              </div>
              <div className="flex justify-end">
                {product.availability === "IN_STOCK" ? (
                <span className="bg-blue-100 text-blue-800 text-md font-medium px-2.5 py-0.5 rounded-full">
                  In Stock
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 text-md font-medium px-2.5 py-0.5 rounded-full">
                  Out of Stock
                </span>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
