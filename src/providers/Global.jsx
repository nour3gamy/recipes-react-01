"use client";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/lib/redux/userSlice";
export default function Global() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userJson = localStorage.user;
    const user = JSON.parse(userJson);
    dispatch(login(user));
  }, []);
  return (
    <>
      <ToastContainer />
    </>
  );
}
