const soilColor = document.querySelectorAll(".soil");
const variableCheckbox = document.getElementById("variable");

function handleCheckboxChange() 
{
    // Check the state of the checkboxes and perform actions based on their status
    if (variableCheckbox.checked) 
    {
        soilColor.forEach(soil => {
                soil.style.backgroundColor = "grey";
            });
    } 
    else 
    {
        soilColor.forEach(soil => {
            soil.style.backgroundColor = "brown";
          });
    }
}
variableCheckbox.addEventListener("change", handleCheckboxChange);

//Important characeristics of the top soil are: 
var texture;
var  OC; //Organic Carbon
var pH;
var TEB; //Total Exchangable Bases

//texture, pH, TEB are the most important characteristics of subsoil


//Calculate probability


//Soil States
//calculation to make state







function setSoilState(state){
switch(state){
    case x:
        //change soil
    case y:
        //change soil
    case z:
        //change soil
}
}

//Variable states
//
//
//