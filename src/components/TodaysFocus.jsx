import { useRef, useState } from "react";

const TodaysFocus = () => {
  const readFocus = () => {
    let val;
    if (val !== "" && val!==null) {
      return JSON.parse(localStorage.getItem("focus"));
    } else {
      return "";
    }
  };

  const focusRef = useRef();
  const [focusInput, setFocusInput] = useState(readFocus);
  const [editFocus,setEditFocus]=useState(false||localStorage.getItem('editFocus'));
  const [isFocus,setIsFocus]=useState(false||localStorage.getItem("isfocus"));
  const [isChecked, setIsChecked] = useState(
    false || localStorage.getItem("ischecked")
  );
  const focusInputHandler = (e) => {
    // let focusVal = focusRef.current.value;
    if (e.key === "Enter") {
      setIsFocus(()=>true);
      localStorage.setItem('isfocus',!isFocus);
      // setFocusInput(() => focus);
      localStorage.setItem("focus", JSON.stringify(focusInput));
      setEditFocus(()=>false);
      localStorage.setItem('editfocus',false)
    }
  };

  const checkHandler = () => {
    setIsChecked(() => !isChecked);
    localStorage.setItem("ischecked", !isChecked);
  };

  const editFocusHandler=()=>{
    setEditFocus(()=>true);
    // setFocusInput(()=>focusRef.current.val);
  }
  console.log(focusInput,editFocus)

  return (
    <div className="focus-wrapper">
      {editFocus===false && isFocus?  (
        <p className="focus-actions">
          <span>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkHandler}
            />
          </span>
          <span className={isChecked ? `cross-focus` : ``}>{focusInput}</span>
          <span className="material-icons material-icons-outlined" onClick={editFocusHandler}>edit</span>
          <span className="material-icons material-icons-outlined remove-focus">remove_circle</span>
        </p>
      ) : (
        <p>What are you excited for today?</p>
      )}
      {editFocus===false && isFocus? (
        <span>Let's go for it</span>
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
