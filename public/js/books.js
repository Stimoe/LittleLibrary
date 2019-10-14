$(document).ready(function() {
    $(document).on("submit", "#new-book-form", handleNewBookSubmit);
    
    
    
    function handleNewBookSubmit(event) {
        var titleInput = $("#bookTitle").val().trim();
        var authorInput = $("#authorName").val().trim();
        var genreInput = $("#genreChoice").val().trim();
        var bookImageInput = $("#bookImage").val().trim();
        var ratingInput = $("#ratingInput").val().trim();
        var reviewInput = $("#reviewInput").val().trim();
        event.preventDefault();
        console.log(titleInput);
console.log(authorInput);
console.log(genreInput);
console.log(bookImageInput);
console.log(ratingInput);

// var newBook;
// var newReview;
        // Don't do anything if the name fields hasn't been filled out
        if (!titleInput||!authorInput) {

           var newBook= {
            title: titleInput,
            author: authorInput,
            genre: genreInput|| null,
            image: bookImageInput || null,
            availability: true
           }
      
        $.post("/api/books", newBook)
        .then(function (){
            console.log("added a new book")
        });
   var newReview =
        {
            body: reviewInput,
            title: titleInput,
            rating: ratingInput
            
          }
          $.post("/api/reviews", newReview)
          .then(function (){
            console.log("added a new review")
        }) 
    }  }

     
})