import React from "react";
import { createRoot } from "react-dom/client";
//Using React
const heading = React.createElement('h1' , {} , "Heading");
const heading2 = React.createElement('h2' , {} , "Heading2");
const container = React.createElement('div' , {} , [heading , heading2]);
const root = createRoot(document.getElementById("root"));
root.render(container); 

/* USING JS 
const root = document.getElementById("root");
const heading1 =  document.createElement("h1");
heading1.innerText = "Heading 1";
const heading2 = document.createElement("h2");
heading2.innerText = "Heading2";
const container = document.createElement("div");
container.appendChild(heading1);
container.appendChild(heading2);
root.appendChild(container);
*/
