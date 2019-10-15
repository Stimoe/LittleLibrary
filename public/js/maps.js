// var libraries = [{
//         longitude: -122.33339,
//         lattitude: 47.59979,
//         location: "117 South Main Street, Suite 100 Seattle WA 98104",
//         image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IivnQEAR",
//         description: "Reading repositions our perspectives. Allowing us see the world through other frames of reference, we can experience someone elseâ??s life through abstract eyes. Books teach us to hold and share opinions, beliefs, interests, and ideas apart from our own, and help shed light on surfaces we wouldnâ??t naturally explore. This is the conceptual basis for The Reading Lamp: the relationship of literature to how we see the world. Composed of wood, semi-opaque sails, and a concealed light source, the co",
//         userId: 1
//     }, {
//         longitude: -122.33169,
//         lattitude: 47.60194,
//         location: "508 2nd AVE Seattle WA 98104",
//         image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQEEAZ",
//         description: "Little Free Library is a program I became excited about following some press coverage years ago. Until recently I did not have a suitable location for the library, however we decided our neighborhood pub would be a perfect fit. With people coming and going all day, and many families looking to entertain their children, Little Free Library has a great, humble home in our Irish pub's lobby.",
//         userId: 1
//     }, {
//         longitude: -122.3236821,
//         lattitude: 47.6041348,
//         location: "325 9th Avenue Seattle WA 98104",
//         image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00P0W00000kCJzpUAG",
//         description: " ",
//         userId: 1
//     }, {
//         longitude: -122.34272,
//         lattitude: 47.61149,
//         location: "2008 First Ave Seattle WA 98121",
//         image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQvEAJ",
//         description: "Essentia's Seattle store is on the edge of the Belltown neighborhood in Seattle. At first glance it's part shopping district and part salons and night clubs. Take one look up and you'll see the other side of Belltown, the residences - condos and apartments - that fill this unique neighborhood. We're always looking for ways to connect with our city and give back. The Seattle store's employees also happen to read a lot of books. Adding a Little Free Library seemed a natural fit.",
//         userId: 1
//     }, {
//         longitude: -122.3117329,
//         lattitude: 47.6084887,
//         location: "713 16th Ave E.Seattle Seattle WA 98112",
//         image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQbEAJ",
//         description: "Everyone is welcome. Please help yourself, and please share your books in return",
//         userId: 1
//     }

// ]
// var libraries = [];

// $(document).ready(function() {
//     $.get("/api/libraries", function(data) {
//         for (var i = 0; i < data.length; i++) {
//             //   console.log(data[i]);
//             libraries.push(data[i]);
//         }
//         console.log("this is me logging libraries", libraries);
//         getLocation(libraries)
//     });

// })



// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             console.log(libraries);

//             lat = position.coords.latitude,
//                 lng = position.coords.longitude
//             console.log("my location", lat, lng);

//             var map = new google.maps.Map(document.getElementById('map'), {
//                 zoom: 13,
//                 center: new google.maps.LatLng(lat, lng),
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             });
//             console.log("inside locations function", libraries);

//             for (let i = 0; i < libraries.length; i++) {

//                 lat2 = libraries[i].lattitude
//                 long2 = libraries[i].longitude
//                 location = libraries[i].location
//                 markerToMake = {
//                     lat: lat2,
//                     lng: long2
//                 }
//                 var marker = new google.maps.Marker({
//                     position: markerToMake,
//                     map: map,
//                     title: location
//                 });
//             }
//         })
//     }
// }

$(document).ready(function() {
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

    // Library page #########################################################################

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

});