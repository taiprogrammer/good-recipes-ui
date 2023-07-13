import { styled } from "..";

export const HeaderContainer = styled("div", {
  width: "90%",
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const HeaderComponent = styled("header", {
  padding: "1rem 0",
  background: "$white",
  borderBottom: "1.8px solid $green750",

  img: {
    height: "4.5rem",
  },

  nav: {
    gap: "1rem",
    display: "flex",
  },

  a: {
    color: "$green400",
    textDecoration: "none",

    gap: "0.5rem",
    display: "flex",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      color: "$green350",
    },

    "i, span": {
      fontSize: "1.1rem",
    },
  },
});
