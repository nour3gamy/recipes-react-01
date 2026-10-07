"use client";
import { useEffect } from "react";
import { users } from "@/data/users";
export default function InputData() {
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(users));
    }
  }, []);
}
