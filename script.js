/*
 *  Declaration Section
 */
/*
 * Constant-Parameter Section
 */
const dzLowest = -0.005;
const dzLower = -0.001;
const dzLow = -0.0005;
const dzMid = 0;
const dzHigh = 0.0005;
const dzHigher = 0.001;
const dzHighest = 0.005;
const absZeroTemp = -273.15;
const stdCloudDepthMeters = 5000;
const minCloudDepthMeters = 0;
const lowTempCelsius = -20;
const highTempCelsius = -10;
const cumulusCode = 1;
const cumuloNimbusCode = 2;
const cirroCumulusCode = 3;
const cirrusCode = 4;
const cirroStratusCode = 5;
const altoCumulusCode = 6;
const altoStratusCode = 7;
const stratoCumulusCode = 8;
const stratusCode = 9;
/*
 * Variable subsection
 */
let userInputTemp;
let userInputCloudDepth;
let userInputDZ;
let cloudTypeCode;
/*
 * User Input Section
 */
document.getElementById("submit").addEventListener("click", handleSubmit);
/*
 * Above function tells browswer not to execute commands until user clicks button.
 */
function handleSubmit() {
  // tells browswer to execute after click
  let userInputTemp = document.getElementById("userInputTemp").value;
  let userInputDZ = document.getElementById("userInputDZ").value;
  let userInputCloudDepth = document.getElementById("userInputCloudDepth")
    .value;
  /*
   * Calculation Section
   */
  if (userInputTemp < lowTempCelsius) {
    if (userInputCloudDepth > stdCloudDepthMeters && userInputDZ < dzMid) {
      displayResult("Cumulo Nimbus");
    } else if (userInputDZ < dzLow) {
      cloudTypeCode = cirroCumulusCode;
      displayResult("Cirro Cumulus");
    } else if (userInputDZ >= dzLow && userInputDZ < dzHigh) {
      displayResult("Cirrus");
    } else if (userInputDZ >= dzHigh) {
      displayResult("Cirro Stratus");
    }
  } else if (
    userInputTemp >= lowTempCelsius &&
    userInputTemp < highTempCelsius
  ) {
    if (userInputDZ < dzMid) {
      if (userInputCloudDepth <= stdCloudDepthMeters) {
        displayResult("Alto Cumulus");
      } else {
        displayResult("Cumulo Nimbus");
      }
    } else {
      displayResult("Alto Stratus");
    }
  } else if (userInputTemp >= highTempCelsius) {
    if (userInputDZ < dzLow) {
      if (userInputCloudDepth <= stdCloudDepthMeters) {
        displayResult("Cumulus");
      } else displayResult("Cumulo Nimbus");
    } else if (userInputDZ >= dzLowest && userInputDZ < dzLower) {
      displayResult("Cumulus");
    } else if (userInputDZ >= dzLower && userInputDZ < dzHigher) {
      displayResult("Strato Cumulus");
    } else if (userInputDZ >= dzHigher) {
      displayResult("Stratus");
    }
  }
}

function displayResult(cloudType) {
  document.getElementById("entrySection").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML =
    "The type of cloud you're looking at is " + cloudType + ".";
}
