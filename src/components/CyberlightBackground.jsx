import Squares from "./Squares";

export default function CyberlightBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#001d2d] to-[#003d57] z-0">
      <Squares
        direction="diagonal"
        speed={0.6}
        borderColor="#00ffff"
        hoverFillColor="#00ffff22"
        squareSize={50}
        className="opacity-60"
      />
    </div>
  );
}

