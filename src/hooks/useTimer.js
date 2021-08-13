import { useState,useRef } from "react"
const useTimer=()=>{

    const [time,updateTime]=useState(0);
    const [timepassed,updateTimepassed]=useState(0);

    const startTime=useRef();
    const intervalId=useRef();


    const pause=()=>{
        clearInterval(intervalId.current);
        updateTimepassed((passed)=>(passed+time));
        updateTime(0);
    }

    const play=()=>{
        startTime.current=new Date();
        intervalId.current=setInterval(()=>{
            const timenow=new Date() - startTime.current;
            updateTime(timenow);
        },1000)
    }



    return [time+timepassed,play,pause];

}

export {useTimer}