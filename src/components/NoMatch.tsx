import { useNavigate } from "react-router-dom";
const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button
        className=" bg-amber-600 p-3 mt-2 rounded-full cursor-pointer"
        onClick={() => navigate("/")}
      >
        Go home
      </button>
    </div>
  );
};

export default NoMatch;
