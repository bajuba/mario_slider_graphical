//Created in Collaboration with Drew Stoutin 
//Question List:
//3. How to customize a slider (what are the different parts)
//4. How to remove periods disappear and stay a right triangle
//randy
let slider = document.getElementById("Slider");
let output = document.getElementById("Svalue");

//Sets output equal the value of the slider
output.innerHTML = slider.value;

//Updates slider value as it is moved
//Sets height and prints pyramid
slider.oninput = function() {
 getHeightAndDrawPyramid();
}

//Sets starting symbol
drop = document.getElementById("symbol");
//brick = drop.value;
brick="<div class='brick'></div>";

//Updates symbol as it changes
drop.onchange = function() {
  getHeightAndDrawPyramid();
}

//Makes pyramid show up when screen loads
printPyramid(slider.value);

//put a function that will get the height and run printPyramid getHeightAndDrawPyramid

function getHeightAndDrawPyramid() {
  //brick = drop.value;
  output.innerHTML = slider.value;
  height = slider.value;
  printPyramid(height);
}

//Building the pyramid
function printPyramid(height) {

// ==> Find and empty pyramid before starting
//Grabs pyramid ID from HTML
let element = document.getElementById("pyramid");
// ==> Empty `element` contents
element.innerHTML = '';

let numBricks = 0;
let numSpaces = 0;

  for (let row = 0; row < height; row++) {
    let layer = "";

  //figure out number of bricks and spaces
    numBricks = row + 2;
    numSpaces = height - row - 1;

    for (let i = 0; i < numSpaces; i++) {
        //layer += "&nbsp;";
        layer += "<div class='space'></div>";
    }
    for (let i = 0; i < numBricks; i++) {
        layer += brick;
    } 
      
      //Prints layer to DOM

      //Creates new paragraph element
      let para = document.createElement("p");
      //Creates a text node from layer variable
      
      para.innerHTML += layer;
      //let rowStr = document.createTextNode(layer);

      //Para becomes parent of rowStr
      //para.appendChild(rowStr);
      
      //Element becomes parent of para
      element.appendChild(para);

      //Summation: 
      //element/para/rowStr. 
      //Element == ID of pyramid. 
      //Para(New paragraph tag) == rowStr.
      //rowStr == layer variable == string to build pyramid

    

      }
    
      
    }
    

