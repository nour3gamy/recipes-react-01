"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "@/lib/redux/userSlice";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const login = () => {
    setErrorMessage("");
    let userData = [];
    userData = JSON.parse(localStorage.data);
    if (!email || !password) {
      setErrorMessage("All fields are required!");
      return;
    }
    const user = userData.find(
      (user) => user.email === email && user.password === password,
    );
    if (!user) {
      setErrorMessage("Invalid email or password!");
      return;
    }
    user.loggedin = true;
    dispatch(loginAction(user));
    const userDataJSON = JSON.stringify(user);
    localStorage.user = userDataJSON;
    router.push("./recipes");
  };
  return (
    <div className="h-screen  text-black flex justify-center items-center bg-green-600 ">
      <div className="flex flex-col bg-white w-90 rounded-lg p-4">
        <div className="flex justify-between">
          <label htmlFor="Email">Email</label>
          <input
            className="bg-gray-100  rounded-md  "
            id="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-between m-2 mx-0">
          <label htmlFor="password">password</label>
          <input
            className="bg-gray-100 rounded-md "
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="flex justify-center items-center m-2">
            <button
              className="flex justify-center items-center text-white bg-green-600 rounded-md w-25 h-7"
              onClick={login}
            >
              login
            </button>
          </div>
          <div className="flex gap-2">
            <div>I don't have an acount..</div>
            <button className="text-green-600">
              <Link href={`./register`}>Sign up</Link>
            </button>
          </div>
        </div>
        {errorMessage && (
          <div className="flex bg-red-500 text-white rounded-lg mt-1 py-2 px-3">
            <div>{errorMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
}
