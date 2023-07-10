import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

function CellComponent({ cell, selected, click }: CellProps) {
  return (
    <div
      className={[
        "cell",
        cell.color,
        selected ? "selected" : "",
        cell.available && cell.figure && "selectedAttack",
      ].join(" ")}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className="available"></div>}

      {cell.figure?.logo && <img src={cell.figure.logo} alt="/"></img>}
    </div>
  );
}

export default CellComponent;
