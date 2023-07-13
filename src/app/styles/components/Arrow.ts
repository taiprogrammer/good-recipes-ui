import { styled } from "..";

export const ArrowLeft = styled("path", {
  background: "red",
  width: "30px",
  height: "30px",
  position: "absolute",

  top: "50%",
  transform: "translateY(-50%)",
  WebkitTransform: "translateY(-50%)",
  fill: "$white",
  cursor: "pointer",
  left: "5px",

  "&:disabled": {
    fill: "rgba(255, 255, 255, 0.5)",
  },
});

export const ArrowRight = styled("path", {
  width: "30px",
  height: "30px",
  position: "absolute",

  top: "50%",
  transform: "translateY(-50%)",
  WebkitTransform: "translateY(-50%)",
  fill: "$white",
  cursor: "pointer",
  left: "auto",
  right: "5px",

  "&:disabled": {
    fill: "rgba(255, 255, 255, 0.5)",
  },
});
