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

/*
 * Variable subsection
 */
let userInputTemp;
let userInputCloudDepth;
let userInputDZ;
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
      displayResult("Cumulo Nimbus", "https://i.stack.imgur.com/O2s15.jpg");
    } else if (userInputDZ < dzLow) {
      displayResult(
        "Cirro Cumulus",
        "https://www.sciencesource.com/Doc/TR1_WATERMARKED/0/1/4/5/SS2235265.jpg?d63641690429"
      );
    } else if (userInputDZ >= dzLow && userInputDZ < dzHigh) {
      displayResult(
        "Cirrus",
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Cirrus_clouds_mar08.jpg"
      );
    } else if (userInputDZ >= dzHigh) {
      displayResult(
        "Cirro Stratus",
        "https://i.pinimg.com/originals/55/09/f3/5509f30e7d83b5f2a4d162efc7053dcd.jpg"
      );
    }
  } else if (
    userInputTemp >= lowTempCelsius &&
    userInputTemp < highTempCelsius
  ) {
    if (userInputDZ < dzMid) {
      if (userInputCloudDepth <= stdCloudDepthMeters) {
        displayResult(
          "Alto Cumulus",
          "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus-cloud.jpg"
        );
      } else {
        displayResult("Cumulo Nimbus", "https://i.stack.imgur.com/O2s15.jpg");
      }
    } else {
      displayResult(
        "Alto Stratus",
        "https://raw.githubusercontent.com/qknow/images/gh-pages/featured_books_and_articles-images/clouds/Altostratus%20Clouds.jpg"
      );
    }
  } else if (userInputTemp >= highTempCelsius) {
    if (userInputDZ < dzLow) {
      if (userInputCloudDepth <= stdCloudDepthMeters) {
        displayResult(
          "Cumulus",
          "https://media.istockphoto.com/photos/blue-sky-with-white-clouds-nature-background-picture-id1125295327?k=6&m=1125295327&s=612x612&w=0&h=PiLbRfjK58kjtwXuX0bVDklCmLR9zvPWh3idJDM8KDg="
        );
      } else
        displayResult("Cumulo Nimbus", "https://i.stack.imgur.com/O2s15.jpg");
    } else if (userInputDZ >= dzLowest && userInputDZ < dzLower) {
      displayResult(
        "Cumulus",
        "https://media.istockphoto.com/photos/blue-sky-with-white-clouds-nature-background-picture-id1125295327?k=6&m=1125295327&s=612x612&w=0&h=PiLbRfjK58kjtwXuX0bVDklCmLR9zvPWh3idJDM8KDg="
      );
    } else if (userInputDZ >= dzLower && userInputDZ < dzHigher) {
      displayResult(
        "Strato Cumulus",
        "https://www.mediastorehouse.com/p/173/banded-stratocumulus-clouds-mountains-1102195.jpg"
      );
    } else if (userInputDZ >= dzHigher) {
      displayResult(
        "Stratus",
        "https://t4.ftcdn.net/jpg/02/21/49/23/360_F_221492301_JtyAaVJJUNojxgdhhn06tkxefILTLbfU.jpg"
      );
    }
  }
}

function displayResult(cloudType, cloudPhoto) {
  document.getElementById("entrySection").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("cloudPhoto").style.display = "block";
  document.getElementById("result").innerHTML =
    "The type of cloud you're looking at is " + cloudType + ".";
  document.getElementById("cloudPhoto").src = cloudPhoto;
}
