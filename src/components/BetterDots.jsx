/*
PARAM dotArrangement - JSON of all the things taking up dots
{
    "phone": 5,
    "school": 10,
    "work": 10,
    "friends": 4
}
PARAM rows - rows
PARAM col - columns
*/
export default function BetterDots({ dotArrangement, rows = 1, cols = 1 }) {
    const colors = ["red", "blue", "teal", "cyan"]
    // generate an array of rows and columns
    const dotsArray = Array.from({ length: cols * rows });
    console.log("CURRENT DOT ARANGEMENT");
    const dotArrangementKeys = Object.keys(dotArrangement);
    console.log(dotArrangementKeys);
    // loop inside the dots array 
    console.log('Debug 1')
    let currentDotsArrayIndex = 0;
    let currentColorIndex = 0;
    for (let i = 0; i < dotArrangementKeys.length; i++) {
        // get the key 
        const keyName = dotArrangementKeys[i];
        const valueToLoop = dotArrangement[keyName];
        console.log("looping this many times: ");
        console.log(valueToLoop);
        for (let j = 0; j < valueToLoop; j++) {
            // set the color to the current colors array
            const currentColor = colors[currentColorIndex];
            dotsArray[currentDotsArrayIndex] = currentColor;
            // increase the currentDotsArrayIndex 
            currentDotsArrayIndex++;
            // 
        }
        // go to the next color (increase currentColorIndex) as well
        currentColorIndex++;
        if (currentColorIndex >= colors.length){
            currentColorIndex = 0;
        } 
    }
    console.log(dotsArray);
    const gridStyle =
        cols && rows
            ? {
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 12px)`,
                gap: "8px",
            }
            : {
                display: "flex",
                gap: "8px",
            };
    return (
        <div style={gridStyle}>
            {dotsArray.map((val, idx) => (
                <span
                    key={idx}
                    style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: val==undefined ? "grey":val,
                        display: "inline-block",
                    }}
                />
            ))}
        </div>
    );
}
