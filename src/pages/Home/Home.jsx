import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Products from "../../components/Products";

export default function Home(props) {
  const { username, avatar, setIsAuthenticated, isAuthenticated } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-[100vh] w-full bg-[#84C7AE] flex flex-col gap-4 pb-8">
      <Header
        username={username}
        avatar={avatar}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Products />
    </div>
  );
}
