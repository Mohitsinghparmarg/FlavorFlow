import { useEffect, useState } from "react";
import "../../index.css";

export const OfflineGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Game duration in seconds
  const [boxPosition, setBoxPosition] = useState({ top: "50%", left: "50%" });
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsGameOver(true);
    }
  }, [timeLeft]);

  const handleBoxClick = () => {
    setScore(score + 1);
    setBoxPosition({
      top: `${Math.floor(Math.random() * 80) + 10}%`,
      left: `${Math.floor(Math.random() * 80) + 10}%`,
    });
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameOver(false);
    setBoxPosition({ top: "50%", left: "50%" });
  };

  return (
    <div className="flex flex-col items-center text-center h-screen relative">
      <h1 className="text-2xl font-bold">Offline Game: Click the Box!</h1>
      <p className="text-lg">Score: {score}</p>
      <p className="text-lg">Time Left: {timeLeft}s</p>
      {isGameOver ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold">Game Over!</h2>
          <p className="text-lg">Your Score: {score}</p>
          <button
            onClick={resetGame}
            className="py-2 px-4 bg-red-500 text-white text-lg rounded-md"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div
          className="absolute w-12 h-12 bg-red-500 rounded-lg cursor-pointer transition-all duration-300"
          style={{ top: boxPosition.top, left: boxPosition.left }}
          onClick={handleBoxClick}
        ></div>
      )}
    </div>
  );
};
