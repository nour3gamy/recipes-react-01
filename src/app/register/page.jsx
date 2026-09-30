"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function register() {
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Username, setUsername] = useState();
  const [Age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [Cpassword, setCpassword] = useState();
  const [Gender, setGender] = useState("Male");
  const [Phone, setPhone] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();

  const signUp = () => {
    setErrorMessage("");
    if (
      !FirstName ||
      !LastName ||
      !Username ||
      !Age ||
      !email ||
      !password ||
      !Cpassword ||
      !Gender ||
      !Phone
    ) {
      setErrorMessage("All fields are required!");
    } else if (password !== Cpassword) {
      setErrorMessage("Please Rewrite the password Again!");
    }
    const registerData = {
      FirstName,
      LastName,
      Username,
      Age,
      email,
      password,
      Gender,
      Phone,
    };

    const usersJSON = localStorage.users;

    const users = usersJSON ? JSON.parse(usersJSON) : [];

    users.push(registerData);
    localStorage.users = JSON.stringify(users);

    router.push("/");
  };
  return (
    <div className="h-screen  text-black flex justify-center items-center bg-blue-400 ">
      <div className="flex flex-col bg-white w-90 rounded-lg p-4">
        <div className="flex justify-center items-center text-blue-500 mb-2">
          CREATE NEW ACCOUNT
        </div>
        <div className="flex justify-between">
          <lable htmlFor="FN">First Name</lable>
          <input
            className="bg-gray-100 rounded-md "
            onChange={(e) => setFirstName(e.target.value)}
            id="FN"
            type="text"
          />
        </div>
        <div className="flex justify-between m-2 mx-0">
          <lable htmlFor="LN">Last Name</lable>
          <input
            className="bg-gray-100 rounded-md "
            onChange={(e) => setLastName(e.target.value)}
            id="LN"
            type="text"
          />
        </div>
        <div className="flex justify-between">
          <lable htmlFor="UN">Username</lable>
          <input
            className="bg-gray-100 rounded-md "
            onChange={(e) => setUsername(e.target.value)}
            id="UN"
            type="text"
          />
        </div>
        <div className="flex justify-between m-2 mx-0">
          <lable htmlFor="Age">Age</lable>
          <input
            className="bg-gray-100 rounded-md "
            onChange={(e) => setAge(e.target.value)}
            id="Age"
            type="text"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="Email">Set Email</label>
          <input
            className="bg-gray-100 rounded-md "
            onChange={(e) => setEmail(e.target.value)}
            id="Email"
            type="email"
          />
        </div>
        <div className="flex justify-between m-2 mx-0">
          <label htmlFor="password">Set password</label>
          <input
            className="bg-gray-100 rounded-md "
            onChange={(e) => setpassword(e.target.value)}
            id="password"
            type="password"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="Cpassword">confirm password</label>
          <input
            className="bg-gray-100 rounded-md "
            id="Cpassword"
            type="password"
            onChange={(e) => setCpassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between m-2 mx-0">
          <lable htmlFor="Gen">Gender</lable>
          <select id="Gen" onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">female</option>
          </select>
        </div>
        <div className="flex justify-between">
          <lable htmlFor="Phone">Phone</lable>
          <input
            className="bg-gray-100 rounded-md "
            onChange={(e) => setPhone(e.target.value)}
            id="Phone"
          />
        </div>

        <div className="flex justify-center items-center m-2">
          <button
            className="flex justify-center items-center text-white bg-blue-400 rounded-md w-25 h-7"
            onClick={signUp}
          >
            Sign up
          </button>
        </div>

        {errorMessage && (
          <div className="flex bg-red-500 text-white rounded-lg py-2 px-3 mt-1">
            <div>{errorMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
}
