/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductItem({ product }) {
  const router = useRouter();
  console.log(router)
  return (
    <div className="card">
      <Link href={`${router.asPath}/${product.num_iid}`}>
        <img
          src={product.pic_url}
          alt={product.title}
          className="rounded shadow"
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/search/${router.pathname}/${product.num_iid}`}>
          <h2 className="text-lg">{product.title}</h2>
        </Link>

        <p className="mb-2">Seller: {product.seller_nick}</p>
        <p>£{product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
