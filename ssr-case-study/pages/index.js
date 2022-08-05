import { useEffect, useState } from "react";
import getData from "./api/apiService";
import ProductList from "../components/products/product";

export default function Home({ products }) {
  const [searchText, setSearchText] = useState("");
  const [product, setProduct] = useState(products);

  useEffect(() => {
    (async () => {
      let filteredProducts = await getData(searchText, products);
      setProduct(filteredProducts);
    })();
  }, [searchText]);

  //debounce
  return (
    <div>
      <input
        type="text"
        value={searchText}
        // onChange={(e) => {
        //   setSearchText(e.target.value);
        //   searchFn();
        // }}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <ProductList products={product} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4001/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
