import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
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
              <Link className="text-lg font-bold p-2" href="/cart">Cart</Link>
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
