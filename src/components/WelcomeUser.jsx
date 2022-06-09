import { useRef } from "react";
import { useUserContext } from "../context/userContext";


const WelcomeUser = () => {
    const inputRef=useRef();
    const {userName,setUserName}=useUserContext();
    console.log(userName)

    const userOnSubmit=(e)=>{
        e.preventDefault();
        if(inputRef.current.value!==""){
            setUserName(()=>inputRef.current.value)
            localStorage.setItem('username',inputRef.current.value)}
    }

    return (
      <div className="greetuser-wrapper">
          <h2>Happy to see you,what should i call you?</h2>
          <form onSubmit={userOnSubmit} className="greet-form">
          <input
          type="text"
          ref={inputRef}
          className="greet-input"
          >
          </input>
          <button type="submit" className="greet-continue-btn">Continue</button>
          </form>
         
      </div>
    )
  }
  
export {WelcomeUser} ;