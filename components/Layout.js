import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";
import { ToastContainer } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from './SearchBar';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { store, dispatch } = useContext(Store);

  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [state]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");

    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <Head>
        <title>{title ? title : "FoodMarket"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1}></ToastContainer>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex justify-between shadow-md items-center fixed w-full h-20 z-[100] py-2.5 px-5">
            <Link className="text-lg font-bold" href="/">
              <Image src="/images/drip_store_2.png" width={200} height={100} />
            </Link>

            <SearchBar />

            <ul className="flex gap-5">
              <li>
                <Link className="text-lg font-bold p-2" href="/login">
                  Bruh
                </Link>
              </li>

              <li>
                <Link className="text-lg font-bold p-2" href="/login">
                  Bruh12
                </Link>
              </li>

              <li>
                <Link className="text-lg font-bold p-2" href="/cart">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </li>

              <li>
                {status === "loading" ? (
                  "Loading"
                ) : session?.user ? (
                  <Menu as="div" className="relative inline-block ">
                    <Menu.Button className="text-blue-600">
                      <span className="text-lg font-bold">
                        {session.user.name}
                      </span>
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg bg-white">
                      <Menu.Item>
                        <DropdownLink className="dropdown-link" href="/profile">
                          Profile
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/order-history"
                        >
                          Order History
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          className="dropdown-link"
                          href="#"
                          onClick={logoutClickHandler}
                        >
                          Logout
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link className="text-lg font-bold p-2" href="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </header>
        <main className="container m-auto px-4 mt-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          Copyright © 2022 FoodMarket
        </footer>
      </div>
    </>
  );
}
