$(document).ready(function() {


    function userName() {
        var name = localStorage.getItem("userName");
        $("#userName").text(name);
    }


    function loadBooks() {

        var userid = localStorage.getItem("userId");
        $.get("/api/booksUser/" + userid, function(data) {
            // console.log(data);
            if (data !== null) {
                $("#userBooks").empty();
                $("#date").empty();
                for (let i = 0; i < data.length; i++) {
                    var book = $("<h6>");
                    book.text(data[i].title);
                    book.addClass("userBook");
                    book.attr("data-id", data[i].id);
                    var date = $("<h6>");
                    var d = new Date(data[i].updatedAt);
                    date.text(d.toLocaleString());
                    $("#userBooks").append(book);
                    $("#date").append(date);

                }
            }
        });


    }



    loadBooks();
    userName();
});