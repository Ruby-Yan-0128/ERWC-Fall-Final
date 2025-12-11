import "./App.css";
import BetterDots from "./components/BetterDots";
import Modal from "./components/Modal";
import { useState } from "react";
import Item from "./components/Item";
import { PhoneCalculation, WorkCalculation, SchoolCalculation, SleepCalculation, FriendsCalculation, hoursPerDay, yearsPerLife, hoursPerWeek, hoursPerMonth} from "./ItemCalculations";
import PlusArrow from "./components/PlusArrow";
import AddNewModal from "./components/AddNewModal";
function App() {
  const [dotArrangement, setDotArrangement] = useState({});
  const [showingAddNew, setShowingAddNew] = useState(false);
  const [customItems, setCustomItems] = useState([{
    name: "Hours in depression",
    image_url: "https://images.unsplash.com/photo-1598812866501-87ad598839e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unit_of_measurement: ["hour per day", "hours per day"],
    calculation_function: hoursPerDay,
    shortName: "Depression",
    setDotArrangment: setDotArrangement,
  }]);

  // Calculate total dots filled
  const totalDotsFilled = Object.values(dotArrangement).reduce((sum, val) => sum + val, 0);
  const totalDotsAvailable = 70; 
  const isComplete = totalDotsFilled >= totalDotsAvailable;


 return (
  <div>
    {showingAddNew && <div>
        <AddNewModal setShowingAddNew={setShowingAddNew} setCustomItems={setCustomItems}/>
      </div>}
      <div className="App mt-5">
      <Modal isOpen={isComplete} dotArrangement={dotArrangement}/>
      
      <h1 className="main-header">Spend Your Life</h1>
      <div className="flex">
        <div className="w-3/4 pl-10">
        <div className="grid grid-cols-3 gap-6">
          <Item name={"Hours On Electronics"} image_url={"https://www.shutterstock.com/shutterstock/videos/1096538469/thumb/1.jpg?ip=x480"} unit_of_measurement={["hour per day","hours per day"]} calculation_function={hoursPerDay} shortName={"Phone"} setDotArrangment={setDotArrangement}/>
          <Item name={"Years of School"} image_url={"https://preview.redd.it/captain-underpants-the-first-epic-movie-v0-uqynry9bbqef1.png?width=1080&crop=smart&auto=webp&s=a290544479a03c8f56c5ce73b599cf488af6e68b"} unit_of_measurement={["year per life","years per life"]} calculation_function={yearsPerLife} shortName={"School"} setDotArrangment={setDotArrangement}/>
          <Item name={"Years of Work"} image_url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8w7UFhS5J1a1326qjAtDOq-AVdJli1MItng&s"} unit_of_measurement={["year per life","years per life"]} calculation_function={yearsPerLife} shortName={"Work"} setDotArrangment={setDotArrangement}/>
          <Item name={"Hours Sleeping"} image_url={"https://www.landofsleep.com/hubfs/social-suggested-images/cleanmattress-1.jpeg"} unit_of_measurement={["hour per day","hours per day"]} calculation_function={hoursPerDay} shortName={"Sleep"} setDotArrangment={setDotArrangement}/>
          <Item name={"Hours With Friends"} image_url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBYpTcSgQhCvkUhzTLbv_s8YwBTwCy_gPYQ&s"} unit_of_measurement={["hour per week","hours per week"]} calculation_function={hoursPerWeek} shortName={"Friends"} setDotArrangment={setDotArrangement}/>
          <Item name={"Hours Partying"} image_url={"https://i.pinimg.com/474x/21/d9/e9/21d9e95265278353201cae31a92d08c8.jpg"} unit_of_measurement={["hour per month","hours per month"]} calculation_function={hoursPerMonth} shortName={"Partying"} setDotArrangment={setDotArrangement} />
          <Item name={"Hours on Hobbies"} image_url={"https://www.cullensbabyland.us/cdn/shop/products/download_3_3f6b2bdd-1f37-43e5-b522-d3ec327a737d_700x700.jpg?v=1643934189"} unit_of_measurement={["hour per week", "hours per week"]} calculation_function={hoursPerWeek} shortName={"Hobbies"} setDotArrangment={setDotArrangement} />
          <Item name={"Hours Eating"} image_url={"https://i.ytimg.com/vi/IBlIMdCyVgw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdPgE8zgq6MmyB1fN1xEYffhybtw"} unit_of_measurement={["hour per day", "hours per day"]} calculation_function={hoursPerDay} shortName={"Eating"} setDotArrangment={setDotArrangement}/>
          <PlusArrow setShowingAddNew={setShowingAddNew}/>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {customItems.map((item, index) => (<Item key={index} name={item.name} image_url={item.image_url} unit_of_measurement={item.unit_of_measurement} calculation_function={item.calculation_function} shortName={item.shortName} setDotArrangment={setDotArrangement}/>))}
        </div>
          
        </div>
        
        <div className="w-1/4 pl-10">
          <div>
            <h1>Your Life Count</h1>
            <BetterDots cols={10} rows={7} dotArrangement={dotArrangement} />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
