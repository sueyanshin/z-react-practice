import Axios from "axios";
import { useEffect, useState } from "react";
import ListTag from "./ListTag";

const App = () => {
  const [inputTxt, setInputTxt] = useState("");
  const [products, setproducts] = useState([]);
  const [originProducts, setOriginProducts] = useState([]);

  const fetchData = () => {
    Axios.get("https://fakestoreapi.com/products/")
      .then((result) => {
        const apiData = result.data;
        setproducts(apiData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = () => {
    const searchTerm = inputTxt.toLowerCase;
    const filtered = products.filter((product) =>
      product.title.toLowerCase.includes(searchTerm)
    );
    setOriginProducts(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputTxt}
        onChange={(e) => {
          setInputTxt(e.target.value);
          // handleSearch();
        }}
      />
      <ul>
        {products?.map((item) => (
          <ListTag props={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;

// function App() {
//   const [products, setproducts] = useState([]);
//   const [loading, setloading] = useState(false);

//   // const fetchData = () => {
//   //   fetch("https://fakestoreapi.com/products/")
//   //     .then((res) => res.json())
//   //     .then((data) => console.log(data));
//   // };

//   const fetchData = async () => {
//     setloading(true);
//     const api = await fetch("https://fakestoreapi.com/products/");
//     const data = await api.json();
//     setproducts(data);
//     setloading(false);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         products?.map((item) => <li key={item.id}>{item.title}</li>)
//       )}
//     </div>
//   );
// }
