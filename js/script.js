var runningTotal = 0;

const btn = document.querySelector("button").addEventListener('click', handleClick);
const totalElem = document.getElementById("total");

function handleClick() {
    let leftInput = document.getElementById("left").value;
    let rightInput = document.getElementById("right").value;
    runningTotal += sumInputs(leftInput, rightInput);

    if (isNaN(leftInput) || isNaN(rightInput)) {
        totalElem.textContent = `NaN`;
        totalElem.style.color = "purple";
    } else if (Math.sign(runningTotal) === 1) {
        totalElem.textContent = `+${runningTotal}`;
        totalElem.style.color = "green";
    } else if (Math.sign(runningTotal) === -1) {
        totalElem.textContent = `${runningTotal}`;
        totalElem.style.color = "red";
    }
    clearInputFields();
}

function sumInputs(lInput, rInput) {
    if (!(isNaN(lInput) || isNaN(rInput))) {
        return parseInt(lInput) + parseInt(rInput);
    } else{
        return 0;
    }
}

function clearInputFields(){
    document.getElementById("left").value = "";
    document.getElementById("right").value = "";
}