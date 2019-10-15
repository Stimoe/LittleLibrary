var marker;
var markers = [];
var libraryId;
var libarr=[];
$(document).ready(function() {
    var libraryLocations = [];

    $.get("/api/libraries").then(function(data) {
        console.log("first for loop", data);

        for (let i = 0; i < data.length; i++) {
            // console.log("this is logging the whole libraries in for loop", data);
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
                        libarr=[];
                        libarr.push(libraryId);
                        console.log("checking if here ",libarr[0]);
                        
                        showLibrary(libarr[0]) 
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
                if (data !== null) 
                {
                    for (let j = 0; j < data.length; j++) {
                        
                        
                        var result = $("<h3>");
                        result.text(data[j].title + "\n" + data[j].author + "\n" + data[j].genre + "\n" + data[j].image + "\n" + data[j].availability + "\n" + data[j].libraryId);
                        $(".results").append(result);
                    } 
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
            addReview(data.id)
        });
    });

    function addReview(bookID) {
        var review = {
            body: $("#review").val().trim(),
            title: $("#title").val().trim(),
            rating: $("#rating").val(),
            bookId: bookID,
            userId: 1
        }
        $.post("/api/reviews", review).then(function() {
            console.log("created new reviews");
        });
        $("#title").val("");
        $("#author").val("");
        $("#genre").val("");
        $("#image").val("");
        $("#review").val("");
        $("#rating").val("");
        $("#bookModal").modal("hide");
    }




    $(document).on("click", ".addlib", function() {

        // showLibrary(1);
    });

    $(document).on("click", ".book", function() {
        var lid = 2;
        $.get("/api/booksLibrary/" + lid, function(data) {
            if (data !== null) {
                $("#libBooks").empty();
                for (let i = 0; i < data.length; i++) {
                    var book = $("<h3>");
                    book.text(data[i].title);
                    book.addClass("libBook");
                    book.attr("data-id", data[i].id);
                    var btn = $("<button>");
                    btn.addClass("libBookBtn");
                    btn.attr("data-bookId", data[i].id);
                    btn.text("Borrow")
                    $("#libBooks").append(book, btn);

                }

                $("#showBookModal").modal("toggle");
            }
        });
    });

    function showLibrary(id) {
        console.log("library id in showlibrary ",id);
        
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

    $(document).on("click", ".libBook", function() {
        alert($(this).attr("data-id"));
    });

    $(document).on("click", ".return", function() {

        var userid = 2;
        $.get("/api/booksUser/" + userid, function(data) {
            if (data !== null) {
                $("#userBooks").empty();
                for (let i = 0; i < data.length; i++) {
                    var book = $("<h3>");
                    book.text(data[i].title);
                    book.addClass("userBook");
                    book.attr("data-id", data[i].id);
                    var btn = $("<button>");
                    btn.addClass("userBookBtn");
                    btn.attr("data-bookId", data[i].id);
                    btn.text("Return")
                    $("#userBooks").append(book, btn);

                }

                $("#returnBookModal").modal("toggle");
            }
        });

    });

    $(document).on("click", ".update", function() {
        var lid = 2;
        $.get("/api/booksLibrary/" + lid, function(data) {
            if (data !== null) {
                $("#updateBooks").empty();
                for (let i = 0; i < data.length; i++) {
                    var book = $("<h3>");
                    book.text(data[i].title);
                    book.addClass("libBook");
                    book.attr("data-id", data[i].id);
                    var btn = $("<button>");
                    btn.addClass("delBookBtn");
                    btn.attr("data-bookId", data[i].id);
                    btn.text("Delete")
                    $("#updateBooks").append(book, btn);

                }

                $("#updateModal").modal("toggle");
            }
        });
    });

    $(document).on("click", ".udatelibbook", function() {

        $("#updateModal").modal("hide");
        $("#bookModal").modal("show");

    });
    $(document).on("click", ".delBookBtn", function() {

        var bookid = $(this).attr("data-bookid");
        $.ajax({
            url: "/api/books/" + bookid,
            type: "DELETE"
        }).then(function(data) {
            if (data !== null) {
                console.log("Thank you, the book was deleted");
                $("#updateBooks").empty();
                $("#updateModal").modal("hide");
            }
        })



    });


    // $(document).on("click", ".libBookBtn", function() {

    //     var bookid = $(this).attr("data-bookid");
    //     bookdata = {
    //         availability = false,
    //         userId = 1
    //     }
    //     $.ajax({
    //             method: "PUT",
    //             url: "/api/posts" + bookid,
    //             data: bookdata
    //         })
    //         .then(function(res) {
    //             console.log("You have borrowed this book");
    //         });

    // });

    showLibrary(libarr[0])
})

function loadPage() {
    window.location = "/library";
}