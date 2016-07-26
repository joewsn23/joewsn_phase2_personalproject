function checkPlane() {
    var text;
    var planes = document.getElementById("planeInput").value;
    
    switch(planes) {
        case "Airbus A380":
         text = "This is a modern passenger plane.";
         break;
        
        case "F-35 Lightning II":
         text = "This is a planned U.S. fighter jet.";
         break;
        
        case "Blue Angels":
         text = "These are a special stunt flight team.";
         break;
         
        case "Spirit of St. Louis":
         text = "This is a famous museum exhibit.";
         break;
         
        case "F-22A Raptor":
         text = "This is a current U.S. fighter jet."
         break;
         
        case "Seaplane":
         text = "This is a niche type of airplane."
         break;
        
        case "Boeing 747":
         text = "This is the background image of this page."
         break;
         
        default:
         text = "That is not a plane featured in the gallery."
        }
    document.getElementById("planeResult").innerHTML = text;
}

document.getElementById("submit").onclick = function(){
 alert("Thank you for leaving feedback.");
}