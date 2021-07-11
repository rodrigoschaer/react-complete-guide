import { ReactNode } from "react";
import "./Card.scss";

interface CardProps {
  children?: ReactNode;
  className?: string;
  date?: Date;
}

export const Card = (props: CardProps) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};
