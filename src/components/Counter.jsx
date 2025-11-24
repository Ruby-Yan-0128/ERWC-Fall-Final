import { useState } from "react";

export default function Counter({startNumber}) {
    const [myNumber, setMyNumber] = useState(startNumber);
    function addCounter() {
        console.log("adding 1 to the counter");
        setMyNumber(myNumber + 1);
    }
    return (
        <div>
            <p>{myNumber}</p>
            <button onClick={addCounter}>Add to the counter</button>
        </div>
    )
}