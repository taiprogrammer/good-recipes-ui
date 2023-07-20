import { styled } from "..";

export const Wrapper = styled("div", {
  cursor: "pointer",
  background: "$white",
  borderRadius: "10px",

  boxShadow: "5px 20px 30px rgba(0, 0, 0, 0.2)",

  margin: "auto",
  overflow: "hidden",
  position: "relative",

  transform: "scale(0.95)",
  transition: "box-shaddow 0.5s, transform 0.5s",

  "&:hover": {
    transform: "scale(1)",
    boxShadow: "5px 20px 30px rgba(0, 0, 0, 0.2)",
  },

  ".container": {
    width: "100%",
    height: "100%",
  },

  "svg.favorite-blank": {
    position: "absolute",
    right: "0.5rem",
    bottom: "1rem",

    padding: "0.5rem",
    color: "$red500",

    transform: "scale(0.95)",
    transition: "transform 0.5s",

    "&:hover": {
      transform: "scale(2)",
    },
  },
});

export const InfoContainer = styled("div", {
  padding: "1rem",
});

export const Title = styled("h2", {
  color: "$green250",
});

export const Info = styled("div", {
  marginTop: "0.5rem",

  gap: "0.5rem",
  display: "flex",
  flexDirection: "column",

  color: "$textLight",

  span: {
    marginLeft: "0.5rem",
  },
});
