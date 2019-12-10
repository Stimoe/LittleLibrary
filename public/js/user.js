//Capture user input from User Login form and read from database
//User authentication, would love to figure this one out
$(document).ready(function() {
    $("#login").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("click worked")
        var loginUser = {
            email: $("#login-email").val().trim(),
            password: $("#login-password").val().trim(),

        };
        $.post("/login", loginUser)
            .then(function(data) {
                // console.log("login user", data);
                // console.log(data)
                localStorage.setItem('userName', data.name);
                localStorage.setItem('userId', data.id)
                localStorage.setItem("libraryId",1)
                window.location.href = '/search'
                    //   res.json(loginUser);
                    //How do we redirect to user landing page?
            });
    });
    //Capture user input from Create Account form and post to database
    $("#create-user").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newUser = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            name: $("#name").val().trim(),
            zipcode: $("#zipcode").val().trim(),
        };

        $.post("/api/users", newUser)
            .then(function() {
                $("#login-email").val(newUser.email);
                $("#login-password").val(newUser.password);
                $("#email").val("");
                $("#password").val("");
                $("#name").val("");
                $("#zipcode").val("");
            });


    });
});
