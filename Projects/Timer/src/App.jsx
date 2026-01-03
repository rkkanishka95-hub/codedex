import { useState, useEffect } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center w-80">
        <h1 className="text-3xl font-bold text-white mb-6">⏱ Timer</h1>

        <div className="text-5xl font-mono text-green-400 mb-6">
          {formatTime()}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setIsRunning(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Start
          </button>

          <button
            onClick={() => setIsRunning(false)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
          >
            Pause
          </button>

          <button
            onClick={() => {
              setIsRunning(false);
              setSeconds(0);
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
