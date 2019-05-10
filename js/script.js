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
}

function sumInputs(lInput, rInput) {
    // console.log(`linput is typeof ${typeof lInput}; rinput is typeof ${typeof rInput}`);
    return parseInt(lInput) + parseInt(rInput);
}