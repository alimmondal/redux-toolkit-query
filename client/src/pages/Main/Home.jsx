import React from "react";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../features/api/apiSlice";

function Home() {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  const products = data?.data;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>something is wrong</h1>;
  }
  // if (products.length) {
  //   content = products.map((product) => (
  //     <ProductCard key={product._id} product={product} />
  //   ));
  // }

  // if (products.length && (filter.stock || filter.brands.length)) {
  //   content = products
  //     .filter((product) => {
  //       if (stock) {
  //         return product.status === true;
  //       }
  //       return product;
  //     })
  //     .filter((product) => {
  //       if (filter.brands.length) {
  //         return filter.brands.includes(product.brand);
  //       }
  //       return product;
  //     })
  //     .map((product) => <ProductCard key={product._id} product={product} />);
  // }

  return (
    <div className="max-w-7xl gap-14 max-auto my-10">
      {/* <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          }`}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold 
          ${brands.includes("intel") ? activeClass : null}
          `}
          onClick={() => dispatch(toggleBrands("intel"))}
        >
          Intel
        </button>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {/* {content} */}
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
