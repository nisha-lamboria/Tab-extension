import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";

const ShowTime = () => {
  const [time,setTime]=useState("");
  const {userName}=useUserContext();

  useEffect(()=>{
    const date=new Date();
    setTimeout(()=>{
      setTime(()=>date.toLocaleTimeString('en-US'));
    },1000)
    // eslint-disable-next-line
  })

  return (
    <div className="time-wrapper">
      <span>{time}</span>
      <span>Wohha welcome my friend {userName}</span>
    </div>
  )
}

export {ShowTime}; 