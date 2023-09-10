const soilColor = document.querySelectorAll(".soil");

//Important characeristics of the top soil are: 
var texture = "clay"; 

var  OCP; //Organic Carbon (weight of OC / dry soil weight) * 100
var pH; //0-14
var TEB; //Total Exchangable Bases TEB(cmol(+)/kg)=(sum of exchangeable cations / soil weight)
//texture, pH, TEB are the most important characteristics of subsoil
var climate; //classify climate 1-5
var cropType; //classify croptype 1-5
var management; //"Management" refers to agricultural management practices that can impact crop performance. 
//These practices include activities such as irrigation, fertilization, pest control, and cultivation techniques.
//Classify management from 1-5

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



//Calculate probability


//Soil States
//calculation to make stat

//Variable states
//
//
//