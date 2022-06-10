import {Poems} from "./Poems";
import { ShowTime } from "./ShowTime";
import { ShowWeather } from "./ShowWeather";
import { TodaysFocus } from "./TodaysFocus";

const Home = () => {
  return (
    <div>
        <ShowWeather/>
        <ShowTime/>
        <TodaysFocus/>
        <Poems/>
    </div>
  )
}

export {Home} ;