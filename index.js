let homeScore = document.getElementById("homeScore-el")
let guestScore = document.getElementById("guestScore-el")
let homeCount = 0
let guestCount = 0

function homePlus1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function guestPlus1() {
    guestCount += 1 
    guestScore.textContent = guestCount
}

function homePlus2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function guestPlus2() {
    guestCount += 2 
    guestScore.textContent = guestCount
}
function homePlus3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestPlus3() {
    guestCount += 3 
    guestScore.textContent = guestCount
}

function resetBtn(){
    let homeCountReset = 0
    let guestCountReset = 0
    
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCountReset
    guestScore.textContent = guestCountReset
}
