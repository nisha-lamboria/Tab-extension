import { useEffect, useState } from "react";
import {quotes} from "../database/quotes";


const Quotes = () => {
  const [quote,setQuote]=useState("");
  useEffect(()=>{
    // setTimeout(()=>{
      setQuote(()=>quotes[Math.floor(Math.random()*quotes.length)])
    // },1000)
  },[])
  return (
    <div className="quotes-wrapper">
      {quote && <p>{quote}</p>}
    </div>
  )
}

export {Quotes}