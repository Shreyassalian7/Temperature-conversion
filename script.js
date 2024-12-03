const textBox = document.getElementById("temp");
const c2f = document.getElementById("c2f");
const f2c = document.getElementById("f2c");
const result = document.getElementById("unit");
let temp;

function convert() {
    if(c2f.checked) {
        temp = Number(textBox.value);
        temp = ((temp * 1.8) + 32);
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(f2c.checked) {
        temp = Number(textBox.value);
        temp = ((temp - 32) * 0.55);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}

