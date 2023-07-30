"use client";
import Header from "@/components/header/Header";
import Topic from "@/components/topic/Topic";
import Carousel from "@/components/carousel/Carousel";
import { Container, ContainerRecipes, Divider } from "./styles/pages/page";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import { api } from "./lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  async function getRecipes() {
    const response = api.get("/recipe/recents");
    if ((await response).status === 200) {
      setRecipes((await response).data);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <>
      <Header />
      <Topic />
      <Carousel />
      <Container>
        <Divider />
        <h1>Top Receitas</h1>
        <ContainerRecipes>
          {recipes.map((recipe) => {
            return (
              <Card
                nome={recipe.nome}
                horas={recipe.horas}
                minutos={recipe.minutos}
                segundos={recipe.segundos}
                porcoes={recipe.porcoes}
                imagem={recipe.imagem}
                key={recipe.receitaId}
              />
            );
          })}
        </ContainerRecipes>
        <Divider />
        <h1>Recentes</h1>
        <ContainerRecipes>
        </ContainerRecipes>
      </Container>
      <Footer />
    </>
  );
}
