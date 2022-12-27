import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { Store } from "../../utils/Store";
import ProductItem from "../../components/ProductItem";

export default function SearchResults() {
  const router = useRouter();
  const { state } = useContext(Store);
  console.log("this is state", state.searchResult)
  const results = state.searchResult 


  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {results.map((product) => (
          <ProductItem product={product} key={product.num_iid}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
