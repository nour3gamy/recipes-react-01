"use client";
import { useEffect } from "react";
import { users } from "@/data/users";
export default function InputData() {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);
}
