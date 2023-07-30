import { styled } from "..";

export const SignUpContainer = styled("div", {
  width: "90%",
  margin: "0 auto",
});

export const SignUpBox = styled("div", {
  gap: "10rem",
  display: "flex",
  margin: "5rem 0",

  div: {
    width: "100%",
  },
});

export const Title = styled("h1", {
  color: "$green250",
  fontFamily: "'Anton', sans-serif",
});

export const SignUpForm = styled("form", {
  width: "75%",
  alignSelf: "center",

  marginTop: "1rem",

  "div + div": {
    marginTop: "0.5rem",
  },

  div: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    width: "100%",
    display: "block",
    padding: "0.375rem 0.75rem",
    lineHeight: 1.5,
    color: "$textMedium",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    borderRadius: "0.25rem",
    marginTop: "0.5rem",
    transition: "border-color .15s ease-in-out, box-shaddow .15s ease-in-out",
  },

  button: {
    border: "0",
    borderRadius: "0.2rem",

    cursor: "pointer",

    marginTop: "1rem",
    color: "$gray090",
    padding: "0.6rem 3rem",
    background: "$green750",

    transition: "all 0.3s ease-in-out",

    "&:hover": {
      opacity: 0.8,
    },
  },
  ".divider": {
    margin: "1rem 0",
    height: 0,
    overflow: "hidden",
    borderTop: "1px solid #E9ECEF",
  },
  "p, a": {
    fontSize: "0.9rem",
  },
  p: {
    color: "$textMedium",
  },
  a: {
    color: "$green400",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",

    "$:hover": {
      color: "$green300",
      textDecoration: "none",
    },
  },
});
