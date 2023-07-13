import { styled } from "..";

export const TopicSection = styled("section", {
  padding: "1rem 0",
  background: "$green750",
});

export const TopicContainer = styled("div", {
  gap: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",

  textAlign: "center",

  a: {
    color: "$white",
    alignSelf: "center",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
