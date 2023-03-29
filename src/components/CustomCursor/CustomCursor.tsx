import React, { useEffect } from "react";

interface CustomCursorProps {
  hammerImage: string;
}

// create custom hook to get cursor position
export const useHammerPosition = () => {
  const [hammerPos, setHammerPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const moveHammer = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setHammerPos({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", moveHammer);

    return () => {
      document.removeEventListener("mousemove", moveHammer);
    };
  }, []);

  return hammerPos;
};

export default function CustomCursor({ hammerImage }: CustomCursorProps) {
  const { x, y } = useHammerPosition();
  const [hammerDown, setHammerDown] = React.useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => setHammerDown(true));
    document.addEventListener("mouseup", () => setHammerDown(false));
  }, []);

  return (
    <img
      src={hammerImage}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
      className={`hammer-cursor ${hammerDown ? "active" : ""}`}
      alt="hammer"
    />
  );
}
