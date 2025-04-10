import { useState, useEffect, useRef } from "react";
import { CiTimer } from "react-icons/ci";
const Timer = ()=>{
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    // Timer
    useEffect(()=>{
        if(isRunning){
            intervalRef.current = setInterval(()=>{
                setTime(prev=>prev+1)
            },1000)
        }else{
            clearInterval(intervalRef.current);
        }

        return ()=> clearInterval(intervalRef.current);
    },[isRunning])
    const clickStart = ()=>{
        setIsRunning(true);
    }
    const clickStop = ()=>{
        setIsRunning(false);
    }
    const clickRest = ()=>{
        setIsRunning(false);
        setTime(0);
    }

    const formatTime = (seconds) => {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
      };
      
    return(
        <div className="text-center font-mono w-[400px] mx-auto bg-slate-800 text-white shadow-xl rounded pb-5 pt-1 px-5 ">
            <CiTimer className="mx-auto size-8" />
            <h1 className="font-sans text-4xl mb-2 " >Timer</h1>
            <h1 className="text-lg" >Time: {formatTime(time)}</h1>
            <div className="inline-flex gap-x-2 items-center">
                <button className="p-2 bg-teal-400 w-[60px] rounded-lg mt-2" 
                onClick={clickStart} 
                style={isRunning===true?{opacity:0.8}:{opacity:1}}
                 disabled={isRunning} >start</button>
                <button 
                className="p-2 bg-teal-400 w-[60px] rounded-lg mt-2" 
                onClick={clickStop} 
                style={isRunning===true?{opacity:1}:{opacity:0.8}}
                disabled={!isRunning} >stop</button>
                <button className="p-2 bg-teal-400 w-[60px] rounded-lg mt-2" onClick={clickRest} >reset</button>
            </div>
             
        </div>
    )
}

export default Timer;