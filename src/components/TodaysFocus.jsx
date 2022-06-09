import {  useState } from "react";

const TodaysFocus = () => {
  // const readFocus = () => {
  //   let val;
  //   if (val !== "" && val!==null) {
  //     return JSON.parse(localStorage.getItem("focus"));
  //   } else {
  //     return "";
  //   }
  // };

  const [focusInput, setFocusInput] = useState(""||JSON.parse(localStorage.getItem("focus")));
  const [isFocus,setIsFocus]=useState(false||localStorage.getItem("isfocus"));
  const [isChecked, setIsChecked] = useState(
    false || localStorage.getItem("ischecked")
  );
  const focusInputHandler = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("focus", JSON.stringify(focusInput));
      localStorage.setItem('checked',false)
      setIsChecked(()=>false)
      localStorage.setItem('isfocus',true);
      setIsFocus(()=>true)
    }
  };

  const checkHandler = () => {
    setIsChecked(() => !isChecked);
    localStorage.setItem("ischecked", (!isChecked));
  };

  const editFocusHandler=()=>{
    setIsFocus(()=>false);
  }

  const removeFocusHandler=()=>{
    localStorage.removeItem('focus');
    setFocusInput(()=>"");
    setIsFocus(()=>false);
    localStorage.setItem('isfocus',false);
    localStorage.removeItem('checked')
    setIsChecked(()=>false)
    
   
  }

  return (
    <div className="focus-wrapper">
      { isFocus===true?  (
        <p className="focus-actions">
          <span>
            <input
              type="checkbox"
              checked={Boolean(isChecked)}
              onChange={checkHandler}
            />
          </span>
          <span className={isChecked===true? `cross-focus` : ``}>{focusInput}</span>
          {!isChecked && <span className="material-icons material-icons-outlined" onClick={editFocusHandler}>edit</span>}
          <span className="material-icons material-icons-outlined remove-focus" onClick={removeFocusHandler}>remove_circle</span>
        </p>
      ) : (
        <p>What are you excited for today?</p>
      )}
      { isFocus===true? (
        <span>{!isChecked?<span>Let's go for it</span>:<span>Yayy you got one step close</span>}</span>
      ) : (
        <input
          type="text"
          className="greet-input"
          onKeyDown={focusInputHandler}
          value={focusInput}
          onChange={e=>setFocusInput(()=>e.target.value)}
        ></input>
      )}
    </div>
  );
};

export { TodaysFocus };
