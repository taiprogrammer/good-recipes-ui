"use client";
import Header from "@/components/header/Header";
import Topic from "@/components/topic/Topic";
import Carousel from "@/components/carousel/Carousel";
import { Container, ContainerRecipes, Divider } from "./styles/pages/page";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <>
      <Header />
      <Topic />
      <Carousel />
      <Container>
        <Divider />
        <h1>Top 5 Receitas</h1>
        <ContainerRecipes>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerRecipes>
      </Container>
    </>
  );
}
