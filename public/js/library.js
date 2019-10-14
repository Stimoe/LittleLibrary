$(document).ready(function() {

    $(document).on("click", ".searchBtn", function() {

        var input = $("#searchBox").val().trim();
        if (input !== "") {
            //search by title
            $.get("/api/booksTitle/" + input, function(data) {
                console.log("books", data);
                var reslut = $("<h3>");
                reslut.text(data.title + "\n" + data.author + "\n" + data.genre + "\n" + data.image + "\n" + data.availability + "\n");
                $(".results").append(reslut);
            });
            //search by genre
            $.get("/api/booksGenre/" + input, function(data) {
                console.log("books", data);
                var reslut = $("<h3>");
                reslut.text(data.title + "\n" + data.author + "\n" + data.genre + "\n" + data.image + "\n" + data.availability + "\n");
                $(".results").append(reslut);
            });
        }
    });


});