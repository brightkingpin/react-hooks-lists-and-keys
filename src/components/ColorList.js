/*import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
      </ol>
    </div>
  );
}

export default ColorList;
*/

import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    /*
    // For each element in the colors array, a new <li> element is created with a style attribute that sets its text color to the color name. The style attribute is set using the {{}} syntax because it is a JavaScript object containing a key-value pair where the key is color and the value is the current color name being looped over.
    
    return <li style={{ color: color }}>{color}</li>;
  });
*/
  
  // I have fixed the error of the key prop.
    return (
      <li key={color} style={{ color: color }}>
        {color}
      </li>
    );
  });
  // The return statement is used to return a new React component. The component consists of a div element containing an h1 heading that says "Top 5 CSS Colors" and an ordered list (<ol>) containing the array of colorElements that was created earlier.
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
