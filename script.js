// COMPARES THE ELEMENT THAT TARGETED AN EVENT WITH ARRAY TO FIND THE MATCHING ELEMENT IN THE ARRAY
function checkIndex(array, element) {
    for (i=0; i < array.length; i++) {
        if(array[i]==element) {
            return i; 
        }
    }
}

//WEEKS
let mytitles = document.getElementsByClassName("titles");
let mycontent = document.getElementsByClassName("content");
let mytabs = document.getElementsByClassName("tab");

let tab = 0;


// adds an event listener for when user click on a title
for (var i = 0; i < mytitles.length; i++) {
    mytitles[i].addEventListener('click', checkDisplay);
}

//TAB DISPLAY
// ALIGNS THE TITLES IN ASCENDING TAB LAYOUT
for (var i = 0; i < mytitles.length; i++) {
    let current = mytitles[i];
    // finds width of title
    let width = 8;

    //sets left margin to 0;
    current.style.marginLeft = "0%";

    //sets let margin to tab variable
    current.style.marginLeft = tab + "%";

    //adds width of current title to tab so next item is on right of the current title
    tab = tab + width;
}

//DROPDOWN
// CHECKS THE DISPLAY OF EVENT TARGET ELEMENT TO HIDE OR DISPLAY IT
function checkDisplay(evt) {
    //calls checkIndex function
    let index = checkIndex(mytitles, evt.target);

    // sets content from array using same index as from titles
    let content = mycontent[index];

    //finds display styles of content
    let display = window.getComputedStyle(content).display;

    //changes the display of the content based on current display
    if (display == 'none') {
        content.style.display = 'flex';
    } else {
        content.style.display = 'none';
    }
}



//HOMEPAGE

//This codes was inspired by the code from WW3 Schools for a slideshow gallery (https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp). But adapted to include event listeners, a different layout for slides and hover rather than click activation.

//Creates arrays of thumbnails
var mydemos = document.getElementsByClassName("demo");

//Creates arrays of slides
var myslides = document.getElementsByClassName("slide")

//Adds an event listener to every thumbnail for when users hover or leave a thumbnail
for (var i = 0; i < mydemos.length; i++) {
    mydemos[i].addEventListener('mouseenter', showSlide);
    mydemos[i].addEventListener('mouseout', resetSlide);
}

//Checks which thumbnails was hovered over and finds the corresponding slide to display 
function showSlide(evt) {
    let index = checkIndex(mydemos, evt.target);
    let slide = myslides[index];

    if (window.innerWidth > 568) {
        slide.style.display = "block";
    } else {
    }

    // Changes image to show open folder
    evt.target.src = "images/folder-open.png";
}

//Resets the slide content to hidden when users mouse leaves the thumbnail
function resetSlide () {
    for (i = 0; i < myslides.length; i++) {
            myslides[i].style.display = "none";
    }

    for (i = 0; i < mydemos.length; i++) {
            mydemos[i].src = "images/folder-closed.png";
    }

}

   
//FOLDER OPEN
//ADDS EVENT LISTENER TO FOLDER ICON FOR WHEN MOUSE IS HOVERING
document.getElementById("folder-icon").addEventListener('mouseover', closeFolder);
document.getElementById("folder-icon").addEventListener('mouseout', openFolder);

// Changes folders to closed image when hovered over
function closeFolder(evt) {
    evt.target.src = "../images/folder-closed.png";
}

// CHange image to open folder when mouse is no longer hovering
function openFolder(evt) {
    evt.target.src = "../images/folder-open.png";
}

//SHOW LABELS
// let labels = document.getElementsByClassName("mylabel")
// let containers = document.getElementsByClassName("icon-container")

// for (var i = 0; i < containers.length; i++) {
//     containers[i].addEventListener('mouseout', hideLabel);
//     containers[i].addEventListener('mouseenter', showLabel);
// }

// function showLabel(evt) {
//     let index = checkIndex(containers, evt.target);
    
//     labels[index].style.visibility = "visible";
// }

// function hideLabel(evt) {
//     let index = checkIndex(containers, evt.target);
//     console.log(evt.target);
//     labels[index].style.visibility = "hidden";
// }




// let myflex = document.getElementsByClassName("icon-component-container");
// let myicons = document.getElementsByClassName("icon-component");

// for (var i = 0; i < myflex.length; i++) {
//     myflex[i].addEventListener('mouseover', showIcon);
// }

// function showIcon(evt) {
//     let index = checkIndex(myflex, evt.target);
//     let selected = myicons[index];
//     console.log(selected);
//     selected.style.display = "flex";
// }

// function removeIcon (evt) {

// }

 

//OLD

// // ALIGNS THE TITLES IN ASCENDING TAB LAYOUT
// for (var i = 0; i < mytitles.length; i++) {
//     let current = mytitles[i];
//     // finds width of title
//     let width = current.offsetWidth + 12;

//     //sets left margin to 0;
//     current.style.marginLeft = "0px";

//     //sets let margin to tab variable
//     current.style.marginLeft = tab + "px";

//     //adds width of current title to tab so next item is on right of the current title
//     tab = tab + width;
// }