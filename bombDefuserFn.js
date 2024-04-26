let defuserElement = document.getElementById("defuser");
let timerElement = document.getElementById("timer");

let timerId;
let secondsLeft = 10;
let succedd = "You did it";
let failed = "BOOM";

timerId = setInterval(function() {
    secondsLeft = secondsLeft - 1;
    timerElement.textContent = secondsLeft;
    if (secondsLeft === 0) {
        timerElement.textContent = failed;
        clearInterval(timerId);
    }
}, 1000);

function bombDefuser(event) {
    let defuserValue = defuserElement.value;
    if(defuserValue === "defuse" && secondsLeft !== 0 && event.key === "Enter") {
        timerElement.textContent = succedd;
        clearInterval(timerId);
    }
}

defuserElement.addEventListener("keydown", bombDefuser);