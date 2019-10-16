$(document).ready(function() {
  // the data that will send to DB
  var users = [
    {
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
    },
    {
      email: "farfi@farfi.com.ca",
      password: "password",
      name: "Farfignewton",
      zipcode: 98105
    },
    {
      email: "anakin@starwars.com",
      password: "password",
      name: "Anakin",
      zipcode: 98105
    },
    {
      email: "quigonjin@starwars.com",
      password: "password",
      name: "Qui-Gon",
      zipcode: 98115
    },
    {
      email: "yoda@starwars.com",
      password: "password",
      name: "Yoda",
      zipcode: 98103
    },
    {
      email: "asajjventress@starwars.com",
      password: "pass",
      name: "Asajj",
      zipcode: 98121
    },
    {
      email: "bobafett@starwars.com",
      password: "password",
      name: "Boba",
      zipcode: 98121
    },
    {
      email: "Lando@starwars.com",
      password: "password",
      name: "Lando",
      zipcode: 90101
    }
  ];

  var books = [
    {
      title: "Tale of Two Cities",
      author: "Charles Dickens",
      genre: "Classics",
      image:
        "https://m.media-amazon.com/images/I/81LpkLCJ4IL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 2,
      userId: 4
    },
    {
      title: "Romeo and Juliet",
      author: "Shakespeare",
      genre: "Classics",
      image:
        "https://m.media-amazon.com/images/I/51a0TnBwV7L._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 1,
      userId: 3
    },
    {
      title: "Name of the Wind",
      author: "Patrick Rothfuss",
      genre: "Fantasy",
      availability: true,
      image:
        "https://m.media-amazon.com/images/I/91ErGmnR6NL._AC_UY327_FMwebp_QL65_.jpg",
      libraryId: 1,
      userId: 3
    },
    {
      title: "Crooked Kingdom",
      author: "Leigh Bardugo",
      genre: "Fantasy",
      image:
        "https://m.media-amazon.com/images/I/91caZTjrwqL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 1,
      userId: 5
    },
    {
      title: "LLama LLama Red Pajama",
      author: "Anna Dewdney",
      genre: "Children's Literature",
      image:
        "https://m.media-amazon.com/images/I/A1hHoK2Uw-L._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 3,
      userId: 2
    },

    {
      title: "The Empty Land",
      author: "Louis Lamour",
      genre: "Western",
      image:
        "https://m.media-amazon.com/images/I/81XcHClQK8L._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 3,
      userId: 2
    },

    {
      title: "The Three-Body Problem",
      author: "Cixin Liu",
      genre: "Science Fiction",
      image:
        "https://m.media-amazon.com/images/I/919XM42JQlL._AC_UL480_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 3,
      userId: 2
    },

    // {
    //   title: "The Witness",
    //   author: "Nora Roberts",
    //   genre: "Romance",
    //   image:
    //     "https://m.media-amazon.com/images/I/91a+a2YZEXL._AC_UY327_FMwebp_QL65_.jpg",
    //   availability: true,
    //   libraryId: 6,
    //   userId: 11
    // },

    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsen",
      genre: "Mystery",
      image:
        "https://m.media-amazon.com/images/I/819mUKFiqJL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 7,
      userId: 5
    },

    {
      title: "Becoming",
      author: "Michelle Obama",
      genre: "Biography",
      image:
        "https://m.media-amazon.com/images/I/81bFNmhKrTL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 13,
      userId: 1
    },

    {
      title:
        "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
      author: "Stephen R. Covey",
      genre: "Self-Help",
      image:
        "https://m.media-amazon.com/images/I/51lnpupuVtL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 3,
      userId: 2
    },

    {
      title:
        "Building a StoryBrand: Clarify your Message so Customers will Listen",
      author: "Donald Miller",
      genre: "Self-Help",
      image:
        "https://m.media-amazon.com/images/I/41gwu0NcCrL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 10,
      userId: 14
    },

    {
      title: "Ask Ciscoe: Oh, la, la! Your Gardening Questions Answered",
      author: "Cisco Morris",
      genre: "Reference",
      image:
        "https://m.media-amazon.com/images/I/91fl6CaDxfL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 9,
      userId: 19
    },

    {
      title: "Web Design with HTML, CSS, JavaScript and jQuery Set",
      author: "John Ducket",
      genre: "Reference",
      image:
        "https://m.media-amazon.com/images/I/41T53nRtyoL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 8,
      userId: 17
    },

    {
      title: "Coding for Dummies",
      author: "Nikhil Abraham",
      genre: "Reference",
      image:
        "https://m.media-amazon.com/images/I/61IBq8UhhoL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 7,
      userId: 2
    },

    {
      title: "Origin",
      author: "Dan Brown",
      genre: "Mystery",
      image:
        "https://m.media-amazon.com/images/I/8178rXr8qiL._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 6,
      userId: 16
    },

    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      genre: "Science Fiction",
      image:
        "https://m.media-amazon.com/images/I/81FKdzAcx+L._AC_UY327_FMwebp_QL65_.jpg",
      availability: true,
      libraryId: 5,
      userId: 14
    },

    {
      title: "The Hobbit",
      author: "J.R. Tolkein",
      genre: "Fantasy",
      image: "https://images-na.ssl-images-amazon.com/images/I/61Ng-W9EhBL.jpg",
      availability: true,
      libraryId: 10,
      userId: 12
    },
    {
      title: "Something Under my bed is drooling",
      author: "Bill Watterson",
      genre: "Comics",
      image: "",
      availability: true,
      libraryId: 4,
      userId: 3
    },
    {
      title: "Ghost of Gondwana",
      author: "George Gibbs",
      genre: "Nature",
      image: "",
      availability: true,
      libraryId: 3,
      userId: 4
    }
  ];

  var libraries = [
    {
      longitude: -122.33339,
      lattitude: 47.59979,
      location: "117 South Main Street, Suite 100 Seattle WA 98104",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IivnQEAR",
      description:
        "Reading repositions our perspectives. Allowing us see the world through other frames of reference, we can experience someone elseâ??s life through abstract eyes. Books teach us to hold and share opinions, beliefs, interests, and ideas apart from our own, and help shed light on surfaces we wouldnâ??t naturally explore. This is the conceptual basis for The Reading Lamp: the relationship of literature to how we see the world. Composed of wood, semi-opaque sails, and a concealed light source, the co",
      userId: 1
    },
    {
      longitude: -122.33169,
      lattitude: 47.60194,
      location: "508 2nd AVE Seattle WA 98104",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQEEAZ",
      description:
        "Little Free Library is a program I became excited about following some press coverage years ago. Until recently I did not have a suitable location for the library, however we decided our neighborhood pub would be a perfect fit. With people coming and going all day, and many families looking to entertain their children, Little Free Library has a great, humble home in our Irish pub's lobby.",
      userId: 2
    },
    {
      longitude: -122.3236821,
      lattitude: 47.6041348,
      location: "325 9th Avenue Seattle WA 98104",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00P0W00000kCJzpUAG",
      description: " ",
      userId: 3
    },
    {
      longitude: -122.28717,
      lattitude: 47.70717,
      location: "10725 39th Ave NE, Seattle WA 98125",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000Mm5opEAB",
      description:
        "We went for a different look for our library- more of an up cycled look rather than another cute little cedar shake cottage. Our library is an old pie cooler from a diner - completely weathdrproof! It has two levels - the lower one for kid books, upper for adults.",
      userId: 2
    },
    {
      longitude: -122.3626,
      lattitude: 47.67386,
      location: "6050 5th Ave NW, Seattle, WA 98107",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000cCltrEAC",
      description:
        "built this for my wife and son using almost all found and recycled material. Features solar LED lighting inside and out",
      userId: 2
    },
    {
      longitude: -122.28448,
      lattitude: 47.67615,
      location: "6514 40th Ave NE, Seattle WA 98115",
      description:
        "PCC Community Markets celebrates the joy of cooking in community with cookbooks of all kinds at our View Ridge location. Take a book, pack up a picnic and head to the nearby Magnusson Park or View Ridge Ballfield to enjoy.",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00P0W00000mmbhdUAA",
      userId: 2
    },
    {
      longitude: -122.2833433,
      lattitude: 47.6641185,
      location:
        "Seattle Childrens Hospital, 4800 Sand Point Way NE, Seattle WA 98105",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00P0W00000mmbhdUAA",
      description: "Little Free Library located in Radiology Common Area",
      userId: 3
    },
    {
      longitude: -122.34272,
      lattitude: 47.61149,
      location: "2008 First Ave Seattle WA 98121",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQvEAJ",
      description:
        "Essentia's Seattle store is on the edge of the Belltown neighborhood in Seattle. At first glance it's part shopping district and part salons and night clubs. Take one look up and you'll see the other side of Belltown, the residences - condos and apartments - that fill this unique neighborhood. We're always looking for ways to connect with our city and give back. The Seattle store's employees also happen to read a lot of books. Adding a Little Free Library seemed a natural fit.",
      userId: 2
    },
    {
      longitude: -122.35602,
      lattitude: 47.63313,
      location: "1525 1st Avenue N Seattle WA 98109",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuSPEAZ://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQvEAJ",
      description:
        "We love the other libraries in our neighborhood and decided to make one of our own. With the help of a good friend who is an excellent carpenter, the dream became a reality!",
      userId: 2
    },

    {
      longitude: -122.3117329,
      lattitude: 47.6084887,
      location: "713 16th Ave E.Seattle Seattle WA 98112",
      image:
        "https://littlefreelibrary.secure.force.com/servlet/servlet.FileDownload?file=00Pd000000IiuQbEAJ",
      description:
        "Everyone is welcome. Please help yourself, and please share your books in return",
      userId: 1
    }
  ];

  var reviews = [
    {
      body: "I love this book",
      title: "Snow Crash",
      rating: 5,
      bookId: 1,
      userId: 1
    },
    {
      body: "I love this book, amazing ",
      title: "The Three-Body Problem",
      rating: 5,
      bookId: 2,
      userId: 2
    },
    {
      body: "Very Helpful",
      title: "Ask Cisco: Oh, la, la! Your Gardening Questions Answered",
      rating: 3,
      bookId: 3,
      userId: 3
    },
    {
      body: "Interesting read",
      title: "Becoming",
      rating: 3,
      bookId: 3,
      userId: 3
    },
    {
      body: "A vibrant world with intense characters",
      title: "In the Name of the Wind",
      rating: 3,
      bookId: 3,
      userId: 3
    },
    {
      body: "My kids love this book",
      title: "LLama Llama Red Pajama",
      rating: 5,
      bookId: 3,
      userId: 3
    },
    {
      body: "Good Read",
      title: "The Empty Land",
      rating: 3,
      bookId: 3,
      userId: 3
    },
    {
      body: "T",
      title: "Ask Cisco: Oh, la, la! Your Gardening Questions Answered",
      rating: 3,
      bookId: 3,
      userId: 3
    },
    {
      body: "Love the book, should've been one movie...",
      title: "The Hobbit",
      rating: 3,
      bookId: 4,
      userId: 3
    }
  ];

  var bookrequests = [
    {
      text: "hi I need this book",
      libraryId: 1,
      userId: 1
    }
  ];

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
  }
  function DBcheck() {
    $.get("/api/libraries").then(function(data) {
        if (data.length === 0) {
            addAll();
        }
    })
}

DBcheck();
});
