
function drowndownMenu(){
    var x = document.getElementById("dropdownclick");
    if (x.className==="topnav") {
        x.className += " responsive";
        /* change topnav to topnav.responsive the class on html*/
    } else {
        x.className = "topnav";
    }
}