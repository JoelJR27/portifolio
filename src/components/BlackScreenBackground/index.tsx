'use client';

interface BlackScreenBackgroundProps {
  onClick: () => void;
}

export default function BlackScreenBackground({
  onClick
}: BlackScreenBackgroundProps) {
  return (
    <div
      onClick={onClick}
      className="fixed z-10 min-h-screen w-full bg-black/80"
    ></div>
  );
}
