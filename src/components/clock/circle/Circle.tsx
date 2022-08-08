import * as React from "react";
import { useCircleStyles } from "./Circle.style";

export const Circle: React.FC = (props) => {
  const classes = useCircleStyles();
  return <div><div className={classes.root}>{props.children}</div><div className={classes.halfcircle}></div></div>;
};