let message;
let index = 0;
let textToShow = '';
let frameCountdown = 0; 
let cursorBlinkRate = 20; 
let typingSpeed = 5;
let messageType = "startMessage";
let check = false;
let messageCompleted;

let font, yesPointer, noPointer, rowDiv;

function preload() {
  //LOADIND FONT
  font = loadFont('./data/PressStart2P.ttf');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight/2);
  textFont(font);
  
  let typeDiv = createDiv();
  typeDiv.id("type-div");

  let progressSection = createDiv();
  progressSection.id("progress-Section");
  progressSection.addClass("progress-container");
  progressSection.addClass("align-centre");
  progressSection.addClass("no-display");


  let progressDiv = createDiv();
  progressDiv.id("progress-Div");
  progressDiv.addClass("progress-div");


  let progressBar = createDiv();
  progressBar.id("progress-Bar");
  progressBar.addClass("progress-bar");

  
  //CREATES DIV AND HTML ELEMENTS TO INTERACT WITH
  rowDiv = createDiv();
  rowDiv.id("row-div");
  rowDiv.addClass("flex-row");
  rowDiv.addClass("space-between");
  rowDiv.addClass("align-centre");
  rowDiv.addClass("text-wrapper-xs");
  
  yesPointer = createElement('h2', '>');
  yesPointer.addClass("hidden");
  yesPointer.addClass("pointers");
  
  
  noPointer = createElement('h2', '>');
  noPointer.addClass("hidden");
  noPointer.addClass("pointers");
  
  let yesText = createElement('h3', 'YES');
  
  let noText = createElement('h3', 'NO');
  
  let yesDiv = createDiv();
  yesDiv.id("yes-div");
  yesDiv.addClass("flex-row");
  yesDiv.addClass("no-textdecoration");
  yesDiv.addClass("grabber");
  
  yesDiv.mouseOver(showYesPointer);
  yesDiv.mouseClicked(accessMessage);
  
  let noDiv = createDiv();
  noDiv.id("no-div");
  noDiv.addClass("flex-row");
  noDiv.addClass("no-textdecoration");
  noDiv.addClass("grabber");
  
  noDiv.mouseClicked(closeMessage);
  
  noDiv.mouseOver(showNoPointer);
  
  //ADDING DIVS TO EACHOTHER TO CREATE LAYOUT
  typeDiv.child(canvas);

  progressSection.child(progressDiv);
  progressDiv.child(progressBar);

  rowDiv.child(yesDiv);
  rowDiv.child(noDiv);
  yesDiv.child(yesPointer);
  yesDiv.child(yesText);
  noDiv.child(noPointer);
  noDiv.child(noText);


  
  
}



//HIDES AND SHOWS POINTERS NEXT TO YES AND NO
function showYesPointer() {
  yesPointer.style('visibility', 'visible');
  noPointer.style('visibility', 'hidden');
}

function showNoPointer() {
  noPointer.style('visibility', 'visible');
  yesPointer.style('visibility', 'hidden');
}

//CHECKS WHAT MESSAGE SHOULD BE TYPED BASED ON VARIABLE
function checkMessage() {
  if (messageType === "startMessage") {
    message = "So... you want to access my files";
  } else if (messageType === "requestAccess") {
    message = "Requesting Access to GDES20008LW";
  } else if (messageType === "noRequest")
    message = "Program closed, Goodbye!";
}


function typeMessage () {
  //This code was taken and modified from https://editor.p5js.org/xc2736/sketches/1igkPpfX5
  
  textSize(resizeText(3));
  fill("white");
  text(textToShow, width/3.5, height - 30);
  frameRate(30); 
  
  let cursor = (frameCount % cursorBlinkRate < cursorBlinkRate / 2) ? '|' : '';
  text(textToShow + cursor, width/3.5, height - 30);
  
  if (frameCountdown <= 0) {
    if (index < message.length) {
      textToShow += message[index];
      index++;
      frameCountdown = typingSpeed;
    }
  } else {
    frameCountdown--; 
  }
  
  if (index === message.length) {
    messageCompleted = true;
  } else {
    messageCompleted = false;
  }

}

function accessMessage () {
  messageType = "requestAccess";
  resetType();
  hideControls();
  setTimeout(redirect, 7500);
}

function closeMessage () {
  messageType = "noRequest";
  resetType();
  hideControls();
}

//RESETS TYPE FUNCTION TO ALLOW A NEW MESSAGE TO BE TYPED
function resetType () {
  index = 0;
  textToShow = '';
  redraw();
}

// HIDES YES AND NO BUTTONS
function hideControls () {
  rowDiv.style('display', 'none');
}

function showBar () {
  progressSection.style('display', 'block');
}

//REDIRECTS TO HOME PAGE
function redirect() {
  window.location.href = "home.html";
}


//RESIZES TEXT FOR BROWSER
function resizeText(baseTextSize) {
  scaleFactor = width/200;
  let textSize = baseTextSize * scaleFactor

  if (textSize < 14) {
    return 14;
  } else {
    return textSize;
  }

  // console.log(baseTextSize * scaleFactor);
  // return baseTextSize * scaleFactor;
  //map function
  //or add if
}


function draw() {
  background(33,33,33);
  
  checkMessage();
  
  typeMessage();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight/2.3);
}
