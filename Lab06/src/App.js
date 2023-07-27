import { useState, useEffect, useRef } from "react";
export default function App() {
  
  const [day, setDay] = useState("Monday");

  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

//custom hook
function usePrevious(val) {

  const ref = useRef();
  // console.log("before useEff: " + ref.current);

  useEffect(()=>{
    ref.current = val;
    // console.log("Side effect: " + ref.current);
  }, [val]);
     
  // console.log("retrun: " + ref.current);

  return ref.current;
}
