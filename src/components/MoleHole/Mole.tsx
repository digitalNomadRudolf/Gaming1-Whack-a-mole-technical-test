import React from "react";
import moleImage from "../../assets/WAM_Mole.png";

interface MoleProps {
  toggle: (toggleMole: boolean) => void;
  handleClick: () => void;
}

export default function Mole({ toggle, handleClick }: MoleProps) {
  React.useEffect(() => {
    let random = Math.ceil(Math.random() * 10000);
    let timer = setTimeout(() => {
      toggle(true);
    }, random);
    return () => clearTimeout(timer);
  });

  return (
    <img src={moleImage} alt="mole" className="mole" onClick={handleClick} />
  );
}
