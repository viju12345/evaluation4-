// write js code here corresponding to favourites.html

var matchmatches = JSON.parse(localStorage.getItem("favourites"))
// console.log(matchmatches)
displayfev(matchmatches)

function displayfev(fevorit) {
    fevorit.forEach(function (elem, index) {
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
        td6.innerText = "delete"
        td6.style.color = "red"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function () {
            deleteItem(elem, index)
            window.location.reload()
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)

    })
}
function deleteItem(elem, index) {
    matchmatches.splice(index, 1)
    localStorage.setItem("favourites", JSON.stringify(matchmatches))
}

