"use client";
import Header from "@/components/header/Header";
import Topic from "@/components/topic/Topic";
import { LoginContainer, LoginForm, WelcomeBox } from "./styles/pages/login";
import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <Topic />
      <Carousel />
      <main></main>
    </>
  );
}
