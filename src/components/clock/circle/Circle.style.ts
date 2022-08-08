import { createUseStyles } from "react-jss";

export const useCircleStyles = createUseStyles({
  root: {
    position: "relative",
    width: "200px",
    height: "200px",
    background: "#fff",
    borderRadius: "50%",
    boxShadow:
      "-6px -6px 16px var(--white-color), 6px 6px 16px hsla(var(--hue-color), 30%, 86%, 1), inset 6px 6px 16px hsla(var(--hue-color), 30%, 86%, 1), inset -6px -6px 16px var(--white-color)",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
  },
  
  halfcircle: {
    marginTop:"50px",
    width: "100px",
    height: "200px",
    background: "#fff",
    borderBottomRightRadius: "110px",
    borderTopRightRadius:"110px",
    borderBottom:"0",
    boxShadow:
      "0px 0px 0px var(--white-color), 0px 0px 0px hsla(var(--hue-color), 30%, 86%, 1), inset -10px 0px 10px hsla(var(--hue-color), 30%, 86%, 1), inset 0px 0px 0px var(--white-color)",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
  },
});