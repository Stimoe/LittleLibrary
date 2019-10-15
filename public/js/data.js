$(document).ready(function() {
    // the data that will send to DB
    var users = [{
            email: "amjed@amjed.com",
            password: "pass",
            name: "Amjed",
            zipcode: 98121
        },
        {
            email: "dan@dan.com",
            password: "pass",
            name: "Dan",
            zipcode: 98105
        },
        {
            email: "thomas@thomas.com",
            password: "pass",
            name: "Thomas",
            zipcode: 98121
        }
    ];

    var books = [{
            title: "book1",
            author: "author1",
            genre: "genre1",
            image: "img",
            availability: true,
            libraryId: 1,
            userId: 1
        },
        {
            title: "book2",
            author: "author2",
            genre: "genre2",
            image: "img",
            availability: true,
            libraryId: 2,
            userId: 2
        },
        {
            title: "book3",
            author: "author2",
            genre: "genre2",
            image: "img",
            availability: true,
            libraryId: 2,
            userId: 2
        },
        {
            title: "book4",
            author: "author3",
            genre: "genre3",
            image: "img",
            availability: true,
            libraryId: 3,
            userId: 3
        },
        {
            title: "book5",
            author: "author1",
            genre: "genre3",
            image: "img",
            availability: false,
            libraryId: 4,
            userId: 1
        }
    ];

    var libraries = [{
            longitude: -122.33339,
            lattitude: 47.59979,
            location: "117 South Main Street, Suite 100 Seattle WA 98104",
            image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IivnQEAR",
            description: "Reading repositions our perspectives. Allowing us see the world through other frames of reference, we can experience someone elseâ??s life through abstract eyes. Books teach us to hold and share opinions, beliefs, interests, and ideas apart from our own, and help shed light on surfaces we wouldnâ??t naturally explore. This is the conceptual basis for The Reading Lamp: the relationship of literature to how we see the world. Composed of wood, semi-opaque sails, and a concealed light source, the co",
            userId: 1
        },
        {
            longitude: -122.33169,
            lattitude: 47.60194,
            location: "508 2nd AVE Seattle WA 98104",
            image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQEEAZ",
            description: "Little Free Library is a program I became excited about following some press coverage years ago. Until recently I did not have a suitable location for the library, however we decided our neighborhood pub would be a perfect fit. With people coming and going all day, and many families looking to entertain their children, Little Free Library has a great, humble home in our Irish pub's lobby.",
            userId: 2
        },
        {
            longitude: -122.3236821,
            lattitude: 47.6041348,
            location: "325 9th Avenue Seattle WA 98104",
            image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00P0W00000kCJzpUAG",
            description: " ",
            userId: 3
        },
        {
            longitude: -122.34272,
            lattitude: 47.61149,
            location: "2008 First Ave Seattle WA 98121",
            image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQvEAJ",
            description: "Essentia's Seattle store is on the edge of the Belltown neighborhood in Seattle. At first glance it's part shopping district and part salons and night clubs. Take one look up and you'll see the other side of Belltown, the residences - condos and apartments - that fill this unique neighborhood. We're always looking for ways to connect with our city and give back. The Seattle store's employees also happen to read a lot of books. Adding a Little Free Library seemed a natural fit.",
            userId: 2
        },
        {
            longitude: -122.3117329,
            lattitude: 47.6084887,
            location: "713 16th Ave E.Seattle Seattle WA 98112",
            image: "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQbEAJ",
            description: "Everyone is welcome. Please help yourself, and please share your books in return",
            userId: 1
        }
    ];

    var reviews = [{
            body: "I love this book",
            title: "book1",
            rating: 4,
            bookId: 1,
            userId: 1
        },
        {
            body: "I love this book",
            title: "book2",
            rating: 3,
            bookId: 2,
            userId: 2
        },
        {
            body: "I love this book",
            title: "book3",
            rating: 3,
            bookId: 3,
            userId: 3
        },
        {
            body: "I love this book",
            title: "book4",
            rating: 3,
            bookId: 4,
            userId: 3
        }
    ];

    var bookrequests = [{
        text: "hi I need this book",
        libraryId: 1,
        userId: 1
    }];

    // the function that add data to the db
    // $(document).on("click", ".addlib", addlib);

  function addAll() {
    //adding users
    for (let j = 0; j < users.length; j++) {
      $.post("/api/users", users[j]).then(function() {
        console.log("created new user");
      });
    }
    //adding libraries
    for (let i = 0; i < libraries.length; i++) {
      $.post("/api/libraries", libraries[i]).then(function() {
        console.log("created new library");
      });
    }
    //adding books
    for (let k = 0; k < books.length; k++) {
      $.post("/api/books", books[k]).then(function() {
        console.log("created new books");
      });
    }
    //adding reviews
    for (let z = 0; z < reviews.length; z++) {
      $.post("/api/reviews", reviews[z]).then(function() {
        console.log("created new reviews");
      });
    }
    //adding bookRequests
    for (let r = 0; r < bookrequests.length; r++) {
      $.post("/api/bookRequests", bookrequests[r]).then(function() {
        console.log("created new bookrequests");
      });
    }

  addAll();
};
})
