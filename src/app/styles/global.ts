import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  "body, input, textarea, button": {
    fontSize: "1rem",
  },

  ":focus": {
    outline: 0,
    boxShadow: "0 0 0 2px #10403B",
  },
});
