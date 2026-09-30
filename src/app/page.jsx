"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import register from "./register/page";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const login = () => {
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("All fields are required!");
      return;
    }

    let usersData = [];

    if (localStorage.users) {
      usersData = JSON.parse(localStorage.users);
    }

    const user = usersData.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      setErrorMessage("Invalid email or password!");
      return;
    }

    const userDataJSON = JSON.stringify(user);
    localStorage.user = userDataJSON;
    router.push("./recipes");
  };

  return (
    <div className="h-screen  text-black flex justify-center items-center bg-blue-400 ">
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
              className="flex justify-center items-center text-white bg-blue-400 rounded-md w-25 h-7"
              onClick={login}
            >
              login
            </button>
          </div>
          <div className="flex gap-2">
            <div>I don't have an acount..</div>
            <button className="text-blue-400">
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
