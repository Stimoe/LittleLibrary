var marker;
var markers = [];
var libraryId;
$(document).ready(function() {
    var libraryLocations = [];

    $.get("/api/libraries").then(function(data) {
        console.log("first for loop", data);

        for (let i = 0; i < data.length; i++) {
            console.log("this is logging the whole libraries in for loop", data);
            libraryLocations.push(data[i])



        }
        console.log(libraryLocations);

        getLocation(libraryLocations)

    })

    function getLocation(data) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // console.log("inside function",libraries.length);
                // console.log("inside function",libraries);
                lat = position.coords.latitude,
                    lng = position.coords.longitude
                console.log("my location", lat, lng);

                var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 13,
                        center: new google.maps.LatLng(lat, lng),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    })
                    // console.log("inside locations function",libraries.length)

                for (let j = 0; j < data.length; j++) {
                    lat2 = data[j].lattitude
                    long2 = data[j].longitude
                    idOfLibrary = JSON.stringify(data[j].id)
                        // location=data[i].location
                    markerToMake = {
                        lat: lat2,
                        lng: long2
                    }
                    console.log(idOfLibrary);

                    var marker = new google.maps.Marker({
                        position: markerToMake,
                        map: map,
                        title: idOfLibrary

                    });

                    google.maps.event.addDomListener(marker, 'click', function() {
                        // window.location.href = marker.url;
                        console.log(this.title);
                        libraryId = this.title
                        console.log("library ID outside for loop", libraryId);
                        loadPage()
                    });
                };
            })
        }
    }

    //library page
    $(document).on("click", ".searchBtn", function() {

        var input = $("#searchBox").val().trim();
        if (input !== "") {
            //search by title
            $.get("/api/booksTitle/" + input, function(data) {
                if (data !== null) {
                    var reslut = $("<h3>");
                    reslut.text(data.title + "\n" + data.author + "\n" + data.genre + "\n" + data.image + "\n" + data.availability + "\n");
                    $(".results").append(reslut);
                }
            });
            //search by genre
            $.get("/api/booksGenre/" + input, function(data) {
                if (data !== null) {
                    for (let i = 0; i < data.length; i++) {
                        var reslut = $("<h3>");
                        reslut.text(data[i].title + "\n" + data[i].author + "\n" + data[i].genre + "\n" + data[i].image + "\n" + data[i].availability + "\n");
                        $(".results").append(reslut);
                    }

                }
            });
        }
    });

    $(document).on("click", "#addBook", function() {
        var bookId;
        var book = {
            title: $("#title").val().trim(),
            author: $("#author").val().trim(),
            genre: $("#genre").val().trim() || null,
            image: $("#image").val().trim() || null,
            availability: true,
            libraryId: 1,
            userId: 1
        };

        $.post("/api/books", book).then(function(data) {
            console.log("created new books");
            bookId = data.id;

        });
        var review = {
            body: $("#review").val().trim(),
            title: $("#title").val().trim(),
            rating: $("#rating").val(),
            bookId: bookId,
            userId: 1
        }
        $.post("/api/reviews", review).then(function() {
            console.log("created new reviews");
        });
        $("#title").val("")
        $("#author").val("")
        $("#genre").val("")
        $("#image").val("")
        $("#review").val("")
        $("#rating").val("")

    });

    $(document).on("click", ".addlib", function() {

        showLibrary(1);
    });

    $(document).on("click", ".book", function() {

    });

    function showLibrary(id) {
        $.get("/api/libraries/" + id, function(data) {
            if (data !== null) {
                console.log(data.location, data.image)
                var location = $("<h2>");
                var img = $("<img>");
                location.text(data.location);
                img.attr("src", data.image)
                img.addClass("libImage");
                $("#libraryInfo").empty();
                $("#libraryInfo").append(location, img);
            }

        });
    }



})


function loadPage() {
    window.location = "library.html";
}