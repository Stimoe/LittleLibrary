
$(document).ready(function() {

    $(document).on("click", ".searchBtn", function() {

        var input = $("#searchBox").val().trim();
        if (input !== "") {
            //search by title
            $.get("/api/booksTitle/" + input, function(data) {
                if (data !== null) {
                    for (let i = 0; i < data.length; i++) {
                        
                        var result = $("<h3>");
                        result.text(data[i].title + "\n" + data[i].author + "\n" + data[i].genre + "\n" + data[i].image + "\n" + data[i].availability+ "\n" + data[i].libraryId + "\n");
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


});

