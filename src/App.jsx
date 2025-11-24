import Button from "./components/Button";
import Dots from "./components/Dots";
import TextBox from "./components/TextBox";
function App() {
  return (
    <div className="App">
      <h1>Spending 100 Years</h1>
      <Button />
      <h1>Your Life Count</h1>
      <Dots count ={10}></Dots>
      <h1>Hours Scrolling Insta</h1>
      <TextBox placeholder="Enter hours..." />
    </div>
  );
}

export default App;
