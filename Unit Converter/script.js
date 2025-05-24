function convert(){
    let valueInput = document.getElementById("valueInput");
    let unitSelect = document.getElementById("unitSelect");
    let result = document.getElementById("result");

    let value = valueInput.value;
    let unit = unitSelect.value;

    if (value === "" || value.trim() === "") {
        return alert("Invalid number, please try something else.");
    } else{
        if (unit === "mi") {
            let kilometers = value * 1.60934;
            result.innerHTML = `Result: ${kilometers.toFixed(2)} km`;
        } else if (unit === "km") {
            let miles = value / 1.60934;
            result.innerHTML = `Result: ${miles.toFixed(2)} miles`;
        }
    }
}