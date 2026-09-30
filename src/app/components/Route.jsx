"use client";
import { useRouter } from "next/navigation";
export default function Route() {
  const userData = JSON.parse(localStorage.user);
  const { email } = userData;
  const router = useRouter();
  if (!email) router.push("/");
}
