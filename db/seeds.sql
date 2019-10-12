
USE littleLibrary_db;






INSERT INTO User (name,email,username,password) VALUES("Bob","Bob@gmail.com","Bob1", "password");
INSERT INTO User (name,email,username,password) VALUES("Joe","joe@gmail.com","Joe1", "password");
INSERT INTO User (name,email,username,password) VALUES("Emily","Emily@gmail.com","Emily1", "password");
INSERT INTO User (name,email,username,password) VALUES("Forest","Forest@gmail.com","Forest1", "password");
INSERT INTO User (name,email,username,password) VALUES("John","John@gmail.com","John1", "password");
INSERT INTO User (name,email,username,password) VALUES("Dave","Dave@gmail.com","Dave1", "password");
INSERT INTO User (name,email,username,password) VALUES("Bobby","Bobby@gmail.com","Bobby1", "password");


INSERT INTO Review (body,title,rating,user,book) VALUES("The body of the review","Book was bad",2,"Bob1","Tale of two cities")
INSERT INTO Review (body,title,rating,user,book) VALUES("I didnt like it","Book was not very good",1,"joe1","Romeo and Juliet")
INSERT INTO Review (body,title,rating,user,book) VALUES("Loved the book","Book was great",5,"Joe1","Name of the wind")
INSERT INTO Review (body,title,rating,user,book) VALUES("Very special to me","Book was amazing",5,"Emily1","Crooked Kingdom")
INSERT INTO Review (body,title,rating,user,book) VALUES("Want to read it again","Book was awesome",4,"Dave1","Oathbreaker")
INSERT INTO Review (body,title,rating,user,book) VALUES("Cant wait for someone else to enjoy","Book was incredible",5,"Bobby1","Something under my bed is drooling")
INSERT INTO Review (body,title,rating,user,book) VALUES("Book was ok","Book was soso",2,"Bob1","Ghost of Gondwana")
INSERT INTO Review (body,title,rating,user,book) VALUES("It was too long","Book was very long",2,"John1","Hard choices")

{
title: "Tale of two cities",
author: "Charles Dickens",
genre:  "Classics",
availability: true,
library_id: 2,
user_id: 4
},
{
title: "Romeo and Juliet",
author: "Shakespear",
genre:  "Classics",
availability: true,
library_id: 1,
user_id: 3 
},
{
title: "Name of the Wind",
author: "Patrick Rothfuss",
genre:  "Fantasy",
availability: false,
library_id: 1,
user_id: 3  
},
{
title: "Crooked Kingdom",
author:  "Leigh Bardugo",
genre:  "Fantasy",
availability: true,
library_id: 1,
user_id: 5     
},
{
title: "Oathbreaker",
author:  "Brandon Sanderson",
genre:  "Fantasy",
availability: false,
library_id: 3,
user_id: 2     
},
{
title: "Something Under my bed is drooling",
author:  "Bill Watterson",
genre:  "Comics",
availability: true,
library_id: 4,
user_id: 3    
},
title: "Ghost of Gondwana",
author:  "George Gibbs",
genre:  "Nature",
availability: false,
library_id: 3,
user_id: 4     
}

INSERT INTO Book (title,author,genre,availability,library_id,user_id) VALUES("Crooked Kingdom", "Leigh Bardugo", "Fantasy",true,1,5);
INSERT INTO Book (title,author,genre,availability,library_id,user_id) VALUES("Oathbreaker", "Brandon Sanderson", "Fantasy",false,3,2);
INSERT INTO Book (title,author,genre,availability,library_id,user_id) VALUES("Something Under my bed is drooling", "Bill Watterson", "Comics"true,4,3);
INSERT INTO Book (title,author,genre,availability,library_id,user_id) VALUES("Ghost of Gondwana", "George Gibbs", "Nature",false,3,4);
INSERT INTO Book (title,author,genre,availability,library_id,user_id) VALUES("Tale of two cities", "Charles Dickens", "Classics", true,2,4);
INSERT INTO Book (title,author,genre,availability,library_id,user_id) VALUES("Romeo and Juliet", "Shakespear", "Classics",true,1,3);
INSERT INTO Book (title,author,genre,availability,library_id,ser_id) VALUES("Name of the Wind", "Patrick Rothfuss","Fantasy",false,1,3);







