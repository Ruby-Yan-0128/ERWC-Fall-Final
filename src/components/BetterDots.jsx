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
import { useState } from 'react';

export default function BetterDots({ dotArrangement, rows = 1, cols = 1 }) {
    const colors = ["red", "blue", "teal", "gold","mediumorchid"]
    const categoryNames = ["Phone", "School", "Work", "Sleep", "Friends"]; // Names for tooltips
    const [hoveredDot, setHoveredDot] = useState(null);
    // generate an array of rows and columns
    const dotsArray = Array.from({ length: cols * rows });
    const dotCategoryArray = Array.from({ length: cols * rows }); // Track which category each dot belongs to
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
            dotCategoryArray[currentDotsArrayIndex] = { 
                category: keyName, 
                count: valueToLoop,
                colorIndex: currentColorIndex
            };
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
            {dotsArray.map((val, idx) => {
                const dotInfo = dotCategoryArray[idx];
                const isHovered = hoveredDot === idx;
                
                return (
                    <div
                        key={idx}
                        style={{ position: 'relative', display: 'inline-block' }}
                        onMouseEnter={() => setHoveredDot(idx)}
                        onMouseLeave={() => setHoveredDot(null)}
                    >
                        <span
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: val==undefined ? "white":val,
                                display: "inline-block",
                                cursor: "pointer",
                            }}
                        />
                        {isHovered && dotInfo && (
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    color: 'white',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 10,
                                    fontSize: '12px'
                                }}
                            >
                                {dotInfo.category}: {dotInfo.count.toFixed(2)} years
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
