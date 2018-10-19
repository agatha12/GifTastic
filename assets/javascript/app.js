var buttons = ["tulips", "roses", "lilacs", "lavender", "daisy", "petunia"]



$(document).ready(makeButtons)

function makeButtons() {
    $("#buttons").empty()
    for (var i = 0; i < buttons.length; i++) {
        x = buttons[i]
        var create = $("<button type=button>")
        create.addClass("ser")
        create.attr("name", "button")
        create.text(buttons[i])
        $("#buttons").append(create)

    }
    $(".ser").on("click",
        function getData() {
            $("#results").empty()
            var b = $(this).text()
            var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Tkh9g7lSJJZz8nTepzW38mf20BKMmuz5&q=" + b + "=&limit=25&offset=0&rating=G&lang=en"

            $.ajax({
                url: queryURL,

                method: "GET"

            }).then(function (resp) {
                var value = 0
                for (var i = 0; i < 25; i++) {
                    var simgURL = resp.data[i].images.downsized_still.url
                    var rating = resp.data[i].rating
                    var image = $("<img src=" + simgURL + ">")
                    var display = $("<div>")
                    display.addClass("display")
                    image.addClass("gifs")
                    image.attr("src", image.attr("data-still"))
                    image.attr("data-state", "still")
                    image.val(value)
                    display.append("<div>Rating: " + rating + "</div><br>")
                    display.append(image)
                    $("#results").append(display)
                    value++
                }
                $(".gifs").on("click", function () {
                    var state = $(this).attr("data-state")
                    var value = $(this).val()
                    var imgURL = resp.data[value].images.downsized.url
                    var simgURL = resp.data[value].images.downsized_still.url
                    if (state === "still") {
                        $(this).attr("src", imgURL);
                        $(this).attr("data-state", "animate")
                    } else {
                        $(this).attr("src", simgURL)
                        $(this).attr("data-state", "still")
                    }
                })
            })

        })
}
$("#submit").on("click", function (event) {
    event.preventDefault()
    var term = $("#search").val()
    if (buttons.indexOf(term) == -1){
    buttons.push(term)
    makeButtons()
    }
    else{}
})

