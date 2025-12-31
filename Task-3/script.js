function convertTemp() {
  const temp = document.getElementById("tempInput").value;
  const type = document.getElementById("tempType").value;
  const resultField = document.getElementById("result");

  if (temp === "") {
    alert("Please enter a temperature value");
    return;
  }

  let result;

  if (type === "fahrenheit") {
    result = (temp - 32) * (5 / 9);
    resultField.value = result.toFixed(4) + " °C";
  } 
  else if (type === "celsius") {
    result = (temp * 9 / 5) + 32;
    resultField.value = result.toFixed(4) + " °F";
  }
  else if (type === "kelvin") {
    result = temp - 273.15;
    resultField.value = result.toFixed(4) + " °C";
  }
}
