import { useEffect, useState } from "react";
import {poems} from "../database/poems";


const Poems = () => {
  const [poem,setPoem]=useState("");
  useEffect(()=>{
      setPoem(()=>poems[Math.floor(Math.random()*poems.length)])
  },[])
  return (
    <div className="quotes-wrapper">
      {poem && <p>{poem}</p>}
    </div>
  )
}

export {Poems}