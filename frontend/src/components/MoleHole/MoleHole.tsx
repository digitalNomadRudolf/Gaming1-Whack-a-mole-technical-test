import React, { useEffect } from "react";
import moleHoleImage from "../../assets/WAM_Hole.png";

interface MoleHoleProps {
  toggle: (toggleHole: boolean) => void;
}

export default function MoleHole({ toggle }: MoleHoleProps) {
  useEffect(() => {
    let random = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      toggle(true);
    }, random);
    return () => clearTimeout(timer);
  });

  return <img src={moleHoleImage} alt="mole hole" className="mole-hole" />;
}
