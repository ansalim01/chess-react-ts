import React from "react";
import { Figure } from "../models/figures/Figure";
interface LostFiguresProps {
  title: string;
  figure: Figure[];
}
function LostFigures({ title, figure }: LostFiguresProps) {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figure.map((figure) => (
        <div className="" key={figure.id}>
          {figure.name}{" "}
          {figure.logo && <img src={figure.logo} alt="" className="" />}
        </div>
      ))}
    </div>
  );
}

export default LostFigures;
