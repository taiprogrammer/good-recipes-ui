import { styled } from "..";

export const Wrapper = styled("div", {
  margin: "1rem 0",
  position: "relative",
});

export const Slider = styled("div", {
  width: "100%",
});

export const Slide = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "38.8rem",
  maxHeight: "100vh",

  img: {
    cursor: "pointer",

    "&:hover": {
      opacity: 0.8,
    },
  },
});
