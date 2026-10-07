"use client";
import Link from "next/link";
import Icons from "./Icons";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { logout } from "@/lib/redux/userSlice";
import { toast } from "react-toastify";
import Register from "./Register";
export default function TopNavbar() {
  const search = useRef();
  const rouet = useRouter();
  const dispatch = useDispatch();
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const userData = useSelector((state) => {
    return {
      firstName: state.userSlice.firstName,
      lastName: state.userSlice.lastName,
      Username: state.userSlice.Username,
      image: state.userSlice.image,
      loggedin: state.userSlice.loggedin,
    };
  }, shallowEqual);
  const { firstName, lastName, Username, image, loggedin } = userData;
  const searchItem = () => {
    const searched = search.current.value;
    rouet.push(`/recipes/searched/${searched}`);
  };
  const showRegisterToast = () => {
    toast(<Register />, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <nav className="bg-white w-full h-15 flex justify-between gap-2 items-center text-[#253D4E] p-4">
      <Link href="/">
        <Image src="/logo1.png" width={86} height={26} alt="logo" />
      </Link>
      <div className="max-w-60 flex h-8">
        <input
          placeholder="Saerch for recipes..."
          className="bg-[#F3F3F3] p-3 text-[#253D4E] flex-0 rounded-l-xl"
          ref={search}
        />
        <button
          onClick={() => {
            searchItem();
          }}
          className="bg-[#509E2F] flex justify-center items-center text-white rounded-r-xl p-2"
        >
          <Icons name="search" color="white" />
        </button>
      </div>
      {loggedin ? (
        <>
          <div
            className="flex items-center gap-2"
            onClick={() => {
              setShowAccountMenu(!showAccountMenu);
            }}
          >
            <div>{`${firstName} ${lastName}`}</div>
            <img src={image} alt="User Photo" className="w-10 rounded-full" />
          </div>
          {showAccountMenu && (
            <div className="flex flex-col gap-3 shadow-lg rounded-s-lg justify-between fixed top-0 right-0 w-80 bg-white h-screen">
              <div className="flex flex-col ">
                <div className="flex justify-end p-3 cursor-pointer">
                  <Icons
                    extraCSS="hover:text-red-600!"
                    color="black"
                    name="close"
                    iconAction={() => setShowAccountMenu(!showAccountMenu)}
                  />
                </div>

                <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                  Link
                </button>
                <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                  Link
                </button>
                <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                  Link
                </button>
                <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                  Link
                </button>
                <button className="px-3 py-1 text-start hover:bg-gray-300 hover:text-gray-900">
                  Link
                </button>
              </div>

              <button
                className="bg-red-600 text-white rounded-br-none rounded-lg h-9"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-between gap-2">
          <Link
            href={"/"}
            className="bg-green-600 text-white border px-4 py-1 font-medium rounded-xl"
          >
            Login
          </Link>
          <button
            className="bg-white text-green-600 border px-3 py-1 font-medium rounded-xl "
            onClick={showRegisterToast}
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
