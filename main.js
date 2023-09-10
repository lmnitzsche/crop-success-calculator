const soilColor = document.querySelectorAll(".soil");
const variableCheckbox = document.getElementById("variable");

function handleCheckboxChange() 
{
    switch(state){
        case dirt:
            soil.style.backgroundColor = "brown";
        case sand:
            soil.style.backgroundColor = "yellow";
        case gravel:
            soil.style.backgroundColor = "grey";
        case clay:
            soil.style.backgroundColor = "grey";
    }
    // Check the state of the checkboxes and perform actions based on their status
    if (variableCheckbox.checked) 
    {
        soilColor.forEach(soil => {
               
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

//Calculate probability


//Soil States
//calculation to make stat

//Variable states
//
//
//