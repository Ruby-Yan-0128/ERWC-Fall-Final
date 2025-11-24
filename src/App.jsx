import Counter from "./components/Counter";
import "./App.css";
import BetterDots from "./components/BetterDots";
import { useState } from "react";
import Item from "./components/Item";
import { PhoneCalculation, WorkCalculation, SchoolCalculation, SleepCalculation, FriendsCalculation} from "./ItemCalculations";
function App() {
  const [dotArrangement, setDotArrangement] = useState({
    phone: 5,
    school: 10,
    work: 10,
    friends: 4,
  });
 return (
    <div className="App mt-5">
      <h1 className="main-header">Spend your life</h1>
      <div className="flex">
        <div className="w-2/3 pl-10 grid grid-cols-3 gap-6">
          <Item name={"Hours On Your Phone"} image_url={"https://www.blanquivioletas.com/en/wp-content/uploads/2025/09/doomscrolling-brain-shrinking.jpg"} unit_of_measurement={["hour per day","hours per day"]} calculation_function={PhoneCalculation}/>
          <Item name={"Years of School"} image_url={""} unit_of_measurement={["year per life","years per life"]} calculation_function={SchoolCalculation}/>
          <Item name={"Years of Work"} image_url={""} unit_of_measurement={["year per life","years per life"]} calculation_function={WorkCalculation}/>
          <Item name={"Hours Sleeping"} image_url={""} unit_of_measurement={["hour per day","hours per days"]} calculation_function={SleepCalculation}/>
          <Item name={"Hours With Friends"} image_url={""} unit_of_measurement={["hour per day","hours per days"]} calculation_function={FriendsCalculation}/>
        </div>
        <div className="w-1/3 pl-10">
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
