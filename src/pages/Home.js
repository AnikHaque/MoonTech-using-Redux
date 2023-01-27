import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);
  fetch('products.json')
  .then(res=>res.json())
  .then(data=>setData(data))
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
     {
      data.map(product=><ProductCard product={product} />)
     }
    </div>
  );
};

export default Home;
