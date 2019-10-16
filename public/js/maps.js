var marker;
var markers = [];
var libraryId;
var libarr = [];
var dataTest;
$(document).ready(function () {
    var libraryLocations = [];

    $.get("/api/libraries").then(function (data) {
        console.log("first for loop", data);

        for (let i = 0; i < data.length; i++) {
            // console.log("this is logging the whole libraries in for loop", data);
            libraryLocations.push(data[i])



        }
        // console.log(libraryLocations);

        // getLocation()
        getLocation(libraryLocations)


    })









    function getLocation(data) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
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
                console.log("the data", data);

                for (let j = 0; j < data.length; j++) {
                    lat2 = data[j].lattitude
                    long2 = data[j].longitude
                    idOfLibrary = JSON.stringify(data[j].id)
                    // location=data[i].location
                    markerToMake = {
                        lat: lat2,
                        lng: long2
                    }
                    console.log("id",idOfLibrary);
                    console.log("new marker to make ", markerToMake);

                    var marker = new google.maps.Marker({
                        position: markerToMake,
                        map: map,
                        title: idOfLibrary

                    })
                

                google.maps.event.addDomListener(marker, 'click', function () {
                    // window.location.href = marker.url;
                    console.log(this.title);
                    libraryId = this.title
                    console.log("library ID outside for loop", libraryId);
                    libarr = [];
                    libarr.push(libraryId);
                    console.log("checking if here ", libraryId);
                    localStorage.setItem("libraryId", libraryId);

                    loadPage()

                
                })
            }
            })
        }
    }
    //library page
    $(document).on("click", "#searchTitle", function () {

        var input = $("#searchBox").val().trim();
        if (input !== "") {
            //search by title
            libraryLocations = []
            $.get("/api/booksTitle/" + input, function (data) {
                if (data !== null) {
                    for (let j = 0; j < data.length; j++) {
                        libraryLocations.push(data[j].libraryId)

                        var result = $("<h3>");
                        result.addClass("booksResults");
                        result.attr("data-bookid", data[j].id);
                        result.text(data[j].title + "           " + data[j].author);
                        $(".results").append(result);
                    }
                    // getLocation(libraryLocations)
                }
            });
        }
    });
    $(document).on("click", "#searchGenre", function () {

        var input = $("#searchBox").val().trim();
        if (input !== "") {
            //search by genre
            $.get("/api/booksGenre/" + input, function (data) {
                if (data !== null) {
                    for (let k = 0; k < data.length; k++) {
                        libraryLocations.push(data[k].libraryId)
                        var result = $("<h3>");
                        result.addClass("booksResults");
                        result.attr("data-bookid", data[k].id);
                        result.text(data[k].title + "    " + data[k].author);
                        $(".results").append(result);
                    }
                    // getLocation(libraryLocations)
                }
            });
        }
    })
    $(document).on("click", "#searchAuthor", function () {

        var input = $("#searchBox").val().trim();
        if (input !== "") {
            //search by genre
            $.get("/api/booksAuthor/" + input, function (data) {
                if (data !== null) {
                    for (let i = 0; i < data.length; i++) {
                        libraryLocations.push(data[j].libraryId)
                        var result = $("<h3>");
                        result.addClass("booksResults");
                        result.attr("data-bookid", data[i].id);
                        result.text(data[i].title + "    " + data[i].author);
                        $(".results").append(result);
                    }
                    // getLocation(libraryLocations)
                }
            });
        }
    })
    $(document).on("click", "#addBook", function () {

        var uId = localStorage.getItem("userId");
        var lId = localStorage.getItem("libraryId");
        var book = {
            title: $("#title").val().trim(),
            author: $("#author").val().trim(),
            genre: $("#genre").val().trim() || null,
            image: $("#image").val().trim() || null,
            availability: true,
            libraryId: lId,
            userId: uId
        };

        $.post("/api/books", book).then(function (data) {
            console.log("created new books");
            addReview(data.id)
        });
    });

    function addReview(bookID) {
        var uId = localStorage.getItem("userId");
        var review = {
            body: $("#review").val().trim(),
            title: $("#title").val().trim(),
            rating: $("#rating").val(),
            bookId: bookID,
            userId: uId
        }
        $.post("/api/reviews", review).then(function () {
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

    // function makeSearchMarkers(data) {
    //     libraryLocations = [];
    //     console.log("The newest data ", data);
    //     for (let m = 0; m < data.length; m++) {

    //         $.get("/api/libraries/" + data[m], function (response) {
    //             libraryLocations.push(response)
    //             console.log("the major data ", response);

    //         })
    //         //     console.log("hopefully all library info ", libraryLocations);
    //         // getLocation(libraryLocations)
    //     }
    // }


    $(document).on("click", ".booksResults", function () {
        console.log("clicked")
        var id = $(this).attr("data-bookid")

        $.get("/api/books/" + id).then(
            function (data) {
                console.log("the data this time ", data);

                var title = $("<h3>");
                title.text("Title: " + data.title);
                var author = $("<h3>");
                author.text("Author: " + data.author);
                var genre = $("<h3>");
                genre.text("Genre: " + data.genre);
                var libraryId = $("<h3>");
                libraryId.text(data.libraryId);
                //    var image=$("<img>");
                //    image.attr("src",data.image);
                $.get("/api/bookReviews/" + id).then(function (data) {
                    var body = $("<h3>");
                    body.text("Review: " + data.body);
                    var rating = $("<h3>");
                    rating.text("Rating: " + data.rating);


                    $("#clickedBook").empty();
                    $("#clickedBook").addClass("booksResults");
                    $("#clickedBook").append(title, author, genre, rating, body, libraryId)

                })
            })
        $("#clickedBookInfo").modal("show");

    });







    //library page


    $(document).on("click", ".book", function () {
        var lid = localStorage.getItem("libraryId");
        $.get("/api/booksLibrary/" + lid, function (data) {
            if (data !== null) {
                $("#libBooks").empty();
                for (let i = 0; i < data.length; i++) {
                    var book = $("<h3>");
                    book.text("Title: " + data[i].title);
                    book.addClass("libBook");
                    book.attr("data-id", data[i].id);
                    var btn = $("<button>");
                    btn.addClass("libBookBtn");
                    btn.attr("data-bookid", data[i].id);
                    btn.text("Borrow")
                    $("#libBooks").append(book, btn);


                }
                $("#showBookModal").modal("toggle");
            }
        });
    });

    function showLibrary() {
        var id = localStorage.getItem("libraryId");
        var name = localStorage.getItem("userName");
        $("#userName").text(name);
        console.log("library id in showlibrary ", id);
        $.get("/api/libraries/" + id, function (data) {
            dataTest = data
            idLibraryNew = data
            var location = $("<h2>");
            var img = $("<img>");
            var des = $("<p>");
            location.text("Location: " + data.location);
            img.attr("src", data.image)
            img.addClass("libImage");
            des.text("Description: " + data.description);
            $("#libraryInfo").empty();
            $("#libraryInfo").append(location, img, des);
        })
    }


    $(document).on("click", ".libBook", function () {
        var id = $(this).attr("data-id")
        console.log("this is the idddddddddd     " + id)
        $.get("/api/books/" + id).then(
            function (data) {
                console.log("the data this time ", data);
                var title = $("<h3>");
                var author = $("<h3>");
                var genre = $("<h3>");
                var libraryId = $("<h3>");
                if (data) {
                    title.text(data.title);
                    author.text(data.author);
                    genre.text(data.genre);
                    libraryId.text(data.libraryId);
                }
                //    var image=$("<img>");
                //    image.attr("src",data.image);
                $.get("/api/bookReviews/" + id).then(function (data) {
                    var body = $("<h3>");
                    var rating = $("<h3>");
                    if (data) {
                        body.text(data.body);
                        rating.text(data.rating);

                    }
                    $("#insideBook").empty();
                    $("#insideBook").append(title, author, genre, rating, body, libraryId)

                })
            })
        $("#BookInfo").modal("show");

    });

    $(document).on("click", ".return", function () {

        var userid = localStorage.getItem("userId");
        $.get("/api/booksUser/" + userid, function (data) {
            if (data !== null) {
                $("#userBooks").empty();
                for (let i = 0; i < data.length; i++) {
                    var book = $("<h3>");
                    book.text(data[i].title);
                    book.addClass("libBook");
                    book.attr("data-id", data[i].id);
                    var btn = $("<button>");
                    btn.addClass("userReturnBtn");
                    btn.attr("data-bookid", data[i].id);
                    btn.text("Return")
                    $("#userBooks").append(book, btn);

                }
                $("#returnBookModal").modal("toggle");
            }
        });
    })


    $(document).on("click", ".update", function () {
        var lid = 2;
        $.get("/api/booksLibrary/" + lid, function (data) {
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

    $(document).on("click", ".udatelibbook", function () {

        $("#updateModal").modal("hide");
        $("#bookModal").modal("show");

    });
    $(document).on("click", ".delBookBtn", function () {

        var bookid = $(this).attr("data-bookid");
        $.ajax({
            url: "/api/books/" + bookid,
            type: "DELETE"
        }).then(function (data) {
            if (data !== null) {
                console.log("Thank you, the book was deleted");
                $("#updateBooks").empty();
                $("#updateModal").modal("hide");
            }
        })
    });



    $(document).on("click", ".libBookBtn", function () {
        console.log($(this).attr("data-bookid"));
        var Bbid = $(this).attr("data-bookid");
        var uId = localStorage.getItem("userId");
        var bookdata = {
            id: Bbid,
            availability: false,
            userId: uId
        }
        $.ajax({
                method: "PUT",
                url: "/api/books",
                data: bookdata
            })
            .then(function (res) {
                console.log("You have borrowed this book");
                $("#libBooks").empty();
                $("#showBookModal").modal("hide");
            });
    });







    $(document).on("click", ".userReturnBtn", function () {
        var Bbid = $(this).attr("data-bookid");
        var bookdata = {
            id: Bbid,
            availability: true
        }
        $.ajax({
                method: "PUT",
                url: "/api/books",
                data: bookdata
            })
            .then(function (res) {
                console.log("You have returned this book");
                $("#userBooks").empty();
                $("#returnBookModal").modal("hide");
            });
    })

    // showLibrary(libarr[0])
    function loadPage() {
        window.location.href = "/library";

    }
    showLibrary()



})