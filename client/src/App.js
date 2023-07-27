import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Stock from "./components/Stock";
import { fetchData } from "./utils/axios";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const [stock, setStock] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //make axios request and set stock, error and loading
  const handleStock = async (values) => {
    setStock(null);
    setError("");
    setIsLoading(true);
    const stock = await fetchData(values);

    if (stock && stock.status === "OK") {
      setStock(stock);
    } else {
      setError(stock.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Search handleStock={handleStock} isLoading={isLoading} />
      {isLoading && <Loading />}
      {stock && <Stock stock={stock} />}
      {error && <Error error={error} />}
    </>
  );
}

export default App;
