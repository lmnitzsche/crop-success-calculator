const skyColor = document.querySelector(".sky");
const soilColor = document.querySelector(".soil");
const selectElementSoil = document.getElementById("soilmenu");
const selectElementClimate = document.getElementById("climatemenu");
const selectElementManagement = document.getElementById("managementmenu");
const selectElementCrop = document.getElementById("cropmenu");


//OCP, pH, TEB, and texture (1-10) are calculated using the median of each soil type
var OCP; 
var pH; 
var TEB; 
var texture;

var climate; 
var management; 
var cropType;

//weights are calculated using the median of each crop type
var textureWeight;
var OCWeight;
var TEBWeight;
var pHWeight;
var climateWeight;
var cropTypeWeight;
var managementWeight;

selectElementSoil.addEventListener("change", function () {
    const selectedOptionSoil = selectElementSoil.value;

    switch (selectedOptionSoil) {
        case "clay":
            soilColor.style.backgroundColor = "brown";
            pH = 7;
            OCP = 2;
            TEB = 25;
            texture = 8;
            break;
        case "sand":
            soilColor.style.backgroundColor = "yellow";
            pH = 6.5;
            OCP = .2; 
            TEB = 12.5;
            texture = 2;
            break;
        case "silty":
            soilColor.style.backgroundColor = "gray";
            pH = 7;
            OCP = 2;
            TEB = 20;
            texture = 5;
            break;
        case "peaty":
            soilColor.style.backgroundColor = "darkolivegreen";
            pH = 4.5;
            OCP = 5;
            TEB = 7;
            texture = 6;
            break;
        case "chalky":
            soilColor.style.backgroundColor = "white";
            pH = 8;
            OCP = .3; 
            TEB = 35;
            texture = 7;
            break;
        case "loamy":
            soilColor.style.backgroundColor = "darkgoldenrod";
            pH = 6.75;
            OCP = 1.5;
            TEB = 20;
            texture = 4;
            break;
        default:
            soilColor.style.backgroundColor = "brown"; //clay
            pH = 7;
            OCP = 2;
            TEB = 25;
            texture = 8;
    }
});

selectElementClimate.addEventListener("change", function () {
    const selectedOptionClimate = selectElementClimate.value;

    switch (selectedOptionClimate) {
        case "arid":
            skyColor.style.backgroundColor = "orange";
            climate = 1;
            break;
        case "temperate":
            skyColor.style.backgroundColor = "lightblue";
            climate = 2;
            break;
        case "tropical":
            skyColor.style.backgroundColor = "deepskyblue";
            climate = 3;
            break;
        case "continental":
            skyColor.style.backgroundColor = "darkblue";
            climate = 4;
            break;
        case "mediterranean":
            skyColor.style.backgroundColor = "lightgreen";
            climate = 5;
            break;
        default:
            skyColor.style.backgroundColor = "orange"; //arid
            climate = 1;
    }
});

selectElementManagement.addEventListener("change", function () {
    const selectedOptionManagement = selectElementManagement.value;

    switch (selectedOptionManagement) {
        case "bad":
            management = 1;
            break;
        case "sustainable":
            management = 2;
            break;
        case "average":
            management = 3;
            break;
        case "good":
            management = 4;
            break;
        case "great":
            management = 5;
            break;
        default:
            management = 1;
    }
});




function f(texture, OCP, TEB, pH, textureWeight, OCWeight, TEBWeight, pHWeight)
{
    // Calculate the effect of each soil characteristic
    const textureEffect = textureWeight * texture;
    const OCEffect = OCWeight * OCP;
    const TEBEffect = TEBWeight * TEB;
    const pHEffect = pHWeight * pH;

    // Combine the effects
    const cropPerformance = textureEffect + OCEffect + TEBEffect + pHEffect;
    return cropPerformance;
}

function g(climate, cropType, management, climateWeight, cropTypeWeight, managementWeight) 
{

    // Calculate the effect of each factor
    const climateEffect = climateWeight * climate;
    const cropTypeEffect = cropTypeWeight * cropType;
    const managementEffect = managementWeight * management;

    // Combine the effects
    const cropPerformance = climateEffect + cropTypeEffect + managementEffect; 
    return cropPerformance;
}

/*function calculateSuccess(texture, OCP, TEB, pH, climate, cropType, management) {
    // Calculate the effects using functions f and g
    const soilEffect = f(texture, OCP, TEB, pH);
    const environmentEffect = g(climate, cropType, management);

    // Combine the effects using a weighted average
    const overallPerformance = (soilEffect + environmentEffect) / 2;

    // Convert the overall performance to a success percentage (you can adjust the scaling)
    const successPercentage = (overallPerformance + 1) * 50; // Assuming overall performance ranges from -1 to 1

    return successPercentage;
}*/