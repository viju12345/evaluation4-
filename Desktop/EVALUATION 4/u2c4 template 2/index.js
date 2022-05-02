// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("#masaiForm").addEventListener("submit", matchform)
var matchindex = JSON.parse(localStorage.getItem("schedule"))
var matchArr = matchindex || [];
function matchform() {
    event.preventDefault()

    var matchobj = {
        matchnumber: masaiForm.matchNum.value,
        matchteamA: masaiForm.teamA.value,
        matchteamB: masaiForm.teamB.value,
        matchdate: masaiForm.date.value,
        matchvenue: masaiForm.venue.value

    }
    matchArr.push(matchobj);
    localStorage.setItem("schedule", JSON.stringify(matchArr))
    console.log(matchArr);
    window.location.href = "matches.html"
}

