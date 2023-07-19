import { styled } from "..";

export const Container = styled("div", {
  width: "90%",
  margin: "0 auto",

  h1: {
    color: "$green250",
    fontFamily: "'Anton', sans-serif",

    marginTop: "1rem",
  },
});

export const Divider = styled("div", {
  width: "100%",
  height: "0.1rem",

  background: "$gray200",

  marginTop: "3rem",
});

export const ContainerRecipes = styled("div", {
  gap: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",

  margin: "1rem 0",
});
