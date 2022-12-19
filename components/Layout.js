import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [state])
  return (
    <>
      <Head>
        <title>{title ? title : "FoodMarket"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center">
            <Link className="text-lg font-bold" href="/">
              FoodMarket
            </Link>

            <div >
              <Link className="text-lg font-bold p-2" href="/cart">
                Cart 
              {cartItemsCount > 0 && (
                <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  {cartItemsCount}
                </span>
              )}
              </Link>
              <Link className="text-lg font-bold p-2" href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto px-4 mt-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">Copyright © 2022 FoodMarket</footer>
      </div>
    </>
  );
}
