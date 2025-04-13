import { useEffect, useRef, useState } from "react";
import Sound from "../asset/sound/Desktop-alarm-clock-1.mp3"
const CountTimer = ()=>{
   const [countTime,setCountTime] = useState(0);
   const intervalRef = useRef(null);
   const [isRunning,setIsRunning] = useState(false);
   
   useEffect(()=>{
      if(!isRunning){
         clearInterval(intervalRef.current);
         return;
      }
      const timer = setInterval(()=>{
         setCountTime(prev=>{
            if(prev <=1){
               clearInterval(timer);
               setIsRunning(false);
               const audio = new Audio(Sound);
               audio.play();
               return 0;
            }
            return prev -1;
         });
      },1000);
      intervalRef.current = timer;

      // for clearing the catch in end of useEffect
      return ()=> clearInterval(timer);
   },[isRunning]);
   const clickStart= ()=>{
      setIsRunning(true);
   }
   const clickStop = ()=>{
      setIsRunning(false);
   }
   const clickRest=()=>{
      setCountTime(0);
      setIsRunning(false);
   }
   return(
      <div className="text-center bg-gray-800 w-[400px] mx-auto rounded text-white p-5">
        <h1 className="text-2xl mb-5"> CountDown Timer </h1>
        <input type="number" 
        className="bg-gray-100 text-black pl-3 p-1 text-xl inline w-[100px] rounded-lg"
        value={countTime}
        onChange={e=>setCountTime(Number(e.target.value))} />
        <button className="mx-2 p-1"
        onClick={clickRest} >Rest</button>
        <div className="w-full mt-5">
        <button className="mx-5 bg-teal-600 px-5 py-2 rounded hover:bg-teal-500" onClick={clickStart}>Start</button>
        <button className="mx-5 bg-teal-600 px-5 py-2 rounded hover:bg-teal-500" onClick={clickStop}>Stop</button>
        </div>
      </div>
   )
}
export default CountTimer;