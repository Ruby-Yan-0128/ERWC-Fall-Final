import Counter from "./components/Counter";
import "./App.css";
import BetterDots from "./components/BetterDots";
import { useState } from "react";
import Item from "./components/Item";
import { PhoneCalculation, WorkCalculation, SchoolCalculation, SleepCalculation, FriendsCalculation} from "./ItemCalculations";
function App() {
  const [dotArrangement, setDotArrangement] = useState({
  });
 return (
    <div className="App mt-5">
      <h1 className="main-header">Spend Your Life</h1>
      <div className="flex">
        <div className="w-3/4 pl-10 grid grid-cols-3 gap-6">
          <Item name={"Hours On Your Phone"} image_url={"https://thunderdungeon.com/wp-content/uploads/2024/12/doom-scrolling-memes-21-12-20-2024.jpg"} unit_of_measurement={["hour per day","hours per day"]} calculation_function={PhoneCalculation} shortName={"Phone"} setDotArrangment={setDotArrangement}/>
          <Item name={"Years of School"} image_url={"https://www.getcleartouch.com/wp-content/uploads/meme-to-go-back-to-school.jpg"} unit_of_measurement={["year per life","years per life"]} calculation_function={SchoolCalculation} shortName={"School"} setDotArrangment={setDotArrangement}/>
          <Item name={"Years of Work"} image_url={"https://i.pinimg.com/736x/67/ba/c6/67bac63b635746a18fbc784c91f268ac.jpg"} unit_of_measurement={["year per life","years per life"]} calculation_function={WorkCalculation} shortName={"Work"} setDotArrangment={setDotArrangement}/>
          <Item name={"Hours Sleeping"} image_url={"https://thunderdungeon.com/wp-content/uploads/2025/07/sleeping-meme-7-20250718-600x599.jpg"} unit_of_measurement={["hour per night","hours per night"]} calculation_function={SleepCalculation} shortName={"Sleep"} setDotArrangment={setDotArrangement}/>
          <Item name={"Hours With Friends"} image_url={"https://thunderdungeon.com/wp-content/uploads/2024/08/best-friend-memes-12-8-9-2024-600x526.jpg"} unit_of_measurement={["hour per day","hours per days"]} calculation_function={FriendsCalculation} shortName={"Friends"} setDotArrangment={setDotArrangement}/>
        </div>
        <div className="w-1/4 pl-10">
          <div>
            <h1>Your Life Count</h1>
            <BetterDots cols={10} rows={7} dotArrangement={dotArrangement} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
