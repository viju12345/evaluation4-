// write js code here corresponding to matches.html
var matchindex = JSON.parse(localStorage.getItem("schedule"))
var matchfevo = matchindex || [];
// console.log(matchmatches)
displaymatch(matchindex)

function displaymatch(matchindex) {
    matchindex.forEach(function (elem) {
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchnumber

        var td2 = document.createElement("td")
        td2.innerText = elem.matchteamA

        var td3 = document.createElement("td")
        td3.innerText = elem.matchteamB

        var td4 = document.createElement("td")
        td4.innerText = elem.matchdate

        var td5 = document.createElement("td")
        td5.innerText = elem.matchvenue

        var td6 = document.createElement("td")
        td6.innerText = "fevorite"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function () {
            fevorite(elem)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)


    })
    function fevorite(elem) {
        matchfevo.push(elem)
        localStorage.setItem("favourites", JSON.stringify(matchfevo))
        window.location.href = "favourites.html"
    }
}
