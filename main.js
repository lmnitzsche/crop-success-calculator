const soilColor = document.querySelector(".soil");
const selectElement = document.getElementById("soilmenu");

//OCP, pH, and TEB are calculated using the median of each soil type
var OCP; 
var pH; 
var TEB; 

var climate; 
var cropType;
var management; 

selectElement.addEventListener("change", function () {
    const selectedOption = selectElement.value;

    switch (selectedOption) {
        case "clay":
            soilColor.style.backgroundColor = "brown";
            pH = 7;
            OCP = 2;
            TEB = 25;
            break;
        case "sand":
            soilColor.style.backgroundColor = "yellow";
            pH = 6.5;
            OCP = .2; //fix
            TEB = 12.5;
            break;
        case "silty":
            soilColor.style.backgroundColor = "gray";
            pH = 7;
            OCP = 2;
            TEB = 20;
            break;
        case "peaty":
            soilColor.style.backgroundColor = "darkolivegreen";
            pH = 4.5;
            OCP = 5;
            TEB = 7;
            break;
        case "chalky":
            soilColor.style.backgroundColor = "white";
            pH = 8;
            OCP = .3; 
            TEB = 35;
            break;
        case "loamy":
            soilColor.style.backgroundColor = "darkgoldenrod";
            pH = 6.75;
            OCP = 1.5;
            TEB = 20;
            break;
        default:
            soilColor.style.backgroundColor = "brown"; // Default color
    }
});

function f(texture, OCP, TEB, pH) 
{
    // Coefficients (these are arbitrary, actual values would depend on the specific crop)
    const textureWeight = 0.2;
    const OCWeight = 0.3;
    const TEBWeight = 0.1;
    const pHWeight = 0.4;

    // Calculate the effect of each soil characteristic
    const textureEffect = textureWeight * texture;
    const OCEffect = OCWeight * OCP;
    const TEBEffect = TEBWeight * TEB;
    const pHEffect = pHWeight * pH;

    // Combine the effects
    const cropPerformance = textureEffect + OCEffect + TEBEffect + pHEffect;
    return cropPerformance;
}

function g(climate, cropType, management) 
{
    // Coefficients (these are arbitrary, actual values would depend on the specific crop)
    const climateWeight = 0.5;
    const cropTypeWeight = 0.3;
    const managementWeight = 0.2;

    // Calculate the effect of each factor
    const climateEffect = climateWeight * climate;
    const cropTypeEffect = cropTypeWeight * cropType;
    const managementEffect = managementWeight * management;

    // Combine the effects
    const cropPerformance = climateEffect + cropTypeEffect + managementEffect; 
    return cropPerformance;
}