import { Quotes } from "./Quotes";
import { ShowTime } from "./ShowTime";
import { ShowWeather } from "./ShowWeather";
import { TodaysFocus } from "./TodaysFocus";

const Home = () => {
  return (
    <div>
        <ShowWeather/>
        <ShowTime/>
        <TodaysFocus/>
        {/* <Quotes/> */}
    </div>
  )
}

export {Home} ;