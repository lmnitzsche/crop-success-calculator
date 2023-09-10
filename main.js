const skyColor = document.querySelector(".sky");
const soilColor = document.querySelector(".soil");
const selectElementSoil = document.getElementById("soilmenu");
const selectElementClimate = document.getElementById("climatemenu");
const selectElementManagement = document.getElementById("managementmenu");
const selectElementCrop = document.getElementById("cropmenu");
const calculateButton = document.getElementById("viewData");
const resetButton = document.getElementById("reset");


//OCP, pH, TEB, and texture (1-10) are calculated using the median of each soil type
var OCP = 2; 
var pH = 7; //setting inital values to match clay soil
var TEB = 25; 
var texture = 8;
var soilClassification = 1;

var climate = 1; 
var management = 1; //setting inital values to match first dropdown values
var cropType = 3;

//weights are calculated using the median of each crop type
var textureWeight = .3;
var OCWeight = .2; //setting inital values to match wheat
var TEBWeight = .1;
var pHWeight = .2;
var climateWeight = .4;
var cropTypeWeight = .5;
var managementWeight = .3;
var cropClassification = 1;

selectElementSoil.addEventListener("change", function () {
    const selectedOptionSoil = selectElementSoil.value;

    switch (selectedOptionSoil) {
        case "clay":
            soilColor.style.backgroundColor = "brown";
            pH = 7;
            OCP = 2;
            TEB = 25;
            texture = 8;
            soilClassification = 1;
            break;
        case "sand":
            soilColor.style.backgroundColor = "yellow";
            pH = 6.5;
            OCP = .2; 
            TEB = 12.5;
            texture = 2;
            soilClassification = 2;
            break;
        case "silty":
            soilColor.style.backgroundColor = "gray";
            pH = 7;
            OCP = 2;
            TEB = 20;
            texture = 5;
            soilClassification = 3;
            break;
        case "peaty":
            soilColor.style.backgroundColor = "darkolivegreen";
            pH = 4.5;
            OCP = 5;
            TEB = 7;
            texture = 6;
            soilClassification = 4;
            break;
        case "chalky":
            soilColor.style.backgroundColor = "white";
            pH = 8;
            OCP = .3; 
            TEB = 35;
            texture = 7;
            soilClassification = 5;
            break;
        case "loamy":
            soilColor.style.backgroundColor = "darkgoldenrod";
            pH = 6.75;
            OCP = 1.5;
            TEB = 20;
            texture = 4;
            soilClassification = 6;
            break;
        default:
            soilColor.style.backgroundColor = "brown"; //clay
            pH = 7;
            OCP = 2;
            TEB = 25;
            texture = 8;
            soilClassification = 1;
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

selectElementCrop.addEventListener("change", function () {
    const selectedOptionCrop = selectElementCrop.value;

    switch (selectedOptionCrop) {
        case "wheat":
            cropType = 3; //impact on performance 1-5
            textureWeight = .3;
            OCWeight = .2;
            TEBWeight = .1;
            pHWeight = .2;
            climateWeight = .4;
            cropTypeWeight = .5;
            managementWeight = .3;
            cropClassification = 1;
            break;
        case "rice":
            cropType = 4;
            textureWeight = .2;
            OCWeight = .3;
            TEBWeight = .1;
            pHWeight = .2;
            climateWeight = .5;
            cropTypeWeight = .4;
            managementWeight = .4;
            cropClassification = 2;
            break;
        case "corn":
            cropType = 5;
            textureWeight = .4;
            OCWeight = .3;
            TEBWeight = .3;
            pHWeight = .4;
            climateWeight = .5;
            cropTypeWeight = .6;
            managementWeight = .4;
            cropClassification = 3;
            break;
        case "soybeans":
            cropType = 2;
            textureWeight = .2;
            OCWeight = .3;
            TEBWeight = .1;
            pHWeight = .2;
            climateWeight = .4;
            cropTypeWeight = .3;
            managementWeight = .3;
            cropClassification = 4;
            break;
        case "cotton":
            cropType = 2;
            textureWeight = .2;
            OCWeight = .2;
            TEBWeight = .1;
            pHWeight = .2;
            climateWeight = .5;
            cropTypeWeight = .2;
            managementWeight = .2;
            cropClassification = 5;
            break;
        case "barley":
            cropType = 3;
            textureWeight = .3;
            OCWeight = .3;
            TEBWeight = .2;
            pHWeight = .3;
            climateWeight = .4;
            cropTypeWeight = .4;
            managementWeight = .3;
            cropClassification = 6;
            break;
        case "oats":
            cropType = 3;
            textureWeight = .3;
            OCWeight = .2;
            TEBWeight = .2;
            pHWeight = .3;
            climateWeight = .4;
            cropTypeWeight = .4;
            managementWeight = .3;
            cropClassification = 7;
            break;
        case "potatoes":
            cropType = 4;
            textureWeight = .2;
            OCWeight = .3;
            TEBWeight = .3;
            pHWeight = .2;
            climateWeight = .5;
            cropTypeWeight = .4;
            managementWeight = .3;
            cropClassification = 8;
            break;
        case "apples":
            cropType = 4;
            textureWeight = .2;
            OCWeight = .4;
            TEBWeight = .3;
            pHWeight = .3;
            climateWeight = .5;
            cropTypeWeight = .4;
            managementWeight = .4;
            cropClassification = 9;
            break;
        case "grapes":
            cropType = 3;
            textureWeight = .2;
            OCWeight = .4;
            TEBWeight = .3;
            pHWeight = .3;
            climateWeight = .5;
            cropTypeWeight = .4;
            managementWeight = .4;
            cropClassification = 10;
            break;
        case "strawberries":
            cropType = 2;
            textureWeight = .2;
            OCWeight = .3;
            TEBWeight = .1;
            pHWeight = .2;
            climateWeight = .4;
            cropTypeWeight = .2;
            managementWeight = .2;
            cropClassification = 11;
            break;
        default:
            cropType = 3;
            textureWeight = .3; //wheat
            OCWeight = .2;
            TEBWeight = .1;
            pHWeight = .2;
            climateWeight = .4;
            cropTypeWeight = .5;
            managementWeight = .3;
            cropClassification = 1;
    }
});


function f(texture, OCP, TEB, pH, textureWeight, OCWeight, TEBWeight, pHWeight)
{
    // Calculate the effect of each factor
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

function calculateSuccess(texture, OCP, TEB, pH, climate, cropType, management, textureWeight, OCWeight, TEBWeight, pHWeight, climateWeight, cropTypeWeight, managementWeight, soilClassification, cropClassification) {
    // Calculate the effects using functions f and g
    const soilEffect = f(texture, OCP, TEB, pH, textureWeight, OCWeight, TEBWeight, pHWeight);
    const environmentEffect = g(climate, cropType, management, climateWeight, cropTypeWeight, managementWeight);

    // Combine the effects using a weighted average
    const overallPerformance = (soilEffect + environmentEffect) / 2;

    // Convert the overall performance to a success percentage
    var successPercentage = 100 / (1 + Math.exp(-overallPerformance));

    if(management == 1)
    {
        successPercentage = successPercentage * .25;
    }
    else if(management == 2)
    {
        successPercentage = successPercentage * .51;
    }

    if(climate == 1)
    {
        successPercentage = successPercentage * .41;
    }

    if(soilClassification == 1 && cropClassification > 3)
    {
        successPercentage = successPercentage * .22;
    }
    else if(soilClassification == 2)
    {
        successPercentage = successPercentage * .7;

        if(cropClassification < 6 || cropClassification == 11)
        {
            successPercentage = successPercentage * .01;
        }
    }
    else if((soilClassification == 3 && cropClassification == 5) || (soilClassification == 3 && cropClassification == 6) || (soilClassification == 3 && cropClassification == 7))
    {
        successPercentage = successPercentage * .37;
    }
    else if(soilClassification == 4)
    {
        if(management == 5)
        {
            successPercentage = successPercentage * .81;
        }
        else if(management == 4)
        {
            successPercentage = successPercentage * .57;
        }
        else
        {
            successPercentage = successPercentage * .11;
        }
    }
    else if(soilClassification == 5)
    {
        if(cropClassification > 8)
        {
            if(management > 2)
            {
                successPercentage = successPercentage * .49;
            }
            else
            {
                successPercentage = successPercentage *.01;
            }
        }
        else if(management == 3)
        {
            successPercentage = successPercentage *.51;
        }
        else if(management < 3)
        {
            successPercentage = successPercentage *.12;
        }
    }
    return successPercentage;
}

calculateButton.addEventListener("click", function () {
    const success = calculateSuccess(texture, OCP, TEB, pH, climate, cropType, management, textureWeight, OCWeight, TEBWeight, pHWeight, climateWeight, cropTypeWeight, managementWeight, soilClassification, cropClassification);

    const resultText = document.createElement("div");
    resultText.innerText = `Success Percentage: ${success.toFixed(2)}%`;
    resultText.classList.add("result-text");

    resultText.style.textAlign = "center";
    resultText.style.lineHeight = "400px";
    
    skyColor.appendChild(resultText);
});

resetButton.addEventListener("click", function () {
    const resultText = skyColor.querySelector(".result-text");
    if (resultText) {
        skyColor.removeChild(resultText);
    }
});