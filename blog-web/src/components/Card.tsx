import React from "react";

interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => {
  return <div>{title}</div>;
};
