import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // استفاده از ref برای نگهداری interval

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // پاک‌سازی هنگام unmount یا تغییر وضعیت
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>⏱️ زمان: {time} ثانیه</h1>
      <button onClick={handleStart} disabled={isRunning}>شروع</button>
      <button onClick={handleStop} disabled={!isRunning}>توقف</button>
      <button onClick={handleReset}>ریست</button>
    </div>
  );
}

export default Stopwatch;
