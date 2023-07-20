import { styled } from "..";

export const FooterWrapper = styled("footer", {
  padding: "1rem",
  background: "$green750",

  h1: {
    color: "$green090",
    fontSize: "1.4rem",

    marginBottom: "1rem",
  },

  p: {
    gap: "0.5rem",
    display: "flex",
    alignItems: "center",

    padding: "0.5rem 0",
  },

  a: {
    color: "$gray200",
    textDecoration: "none",
    transition: "color 0.5s",

    "&:hover": {
      color: "$gray090",
    },
  },

  svg: {
    color: "$gray200",
  },

  img: {
    marginTop: "0.5rem",
  },
});

export const Wrapper = styled("div", {
  width: "90%",
  margin: "1rem auto",
});

export const FooterContent = styled("section", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
});
