var buttons = ["tulips", "roses", "lilacs", "lavender", "daisy", "petunia"]
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Tkh9g7lSJJZz8nTepzW38mf20BKMmuz5&q" + x + "=&limit=25&offset=0&rating=G&lang=en"
var x

$(document).ready(makeButtons)

function makeButtons() {
    $("#buttons").empty()
    for (var i = 0; i < buttons.length; i++) {
        x = buttons[i]
        var create = $("<button>")
        create.addClass("button")
        create.attr("name", "button")
        create.text(buttons[i])
        $("#buttons").append(create)

    }
}
$("#submit").on("click", function (event) {
    event.preventDefault()
    var term = $("#search").val()
    buttons.push(term)
    makeButtons()
    console.log(buttons)
})

$(".button").on("click", getGifs())

function getGifs(){
    console.log()
    console.log("hi")
}

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {

//     console.log(resp)
// })