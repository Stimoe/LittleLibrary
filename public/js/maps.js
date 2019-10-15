var marker;
var markers=[];
var libraryId;
$(document).ready(function() {
    var libraryLocations = [];
    
    $.get("/api/libraries").then(function(data) {
        console.log("first for loop",data);

     for (let i = 0; i < data.length; i++) {
                console.log("this is logging the whole libraries in for loop",data);
                libraryLocations.push(data[i])

              
                
            }
            console.log(libraryLocations);
            
            getLocation(libraryLocations)
            
        })
        function getLocation(data){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
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
       
            for (let j = 0; j < data.length; j++) {
                lat2 = data[j].lattitude
            long2 = data[j].longitude
            idOfLibrary=JSON.stringify(data[j].id)
            // location=data[i].location
            markerToMake = {
                lat: lat2,
                lng: long2
            }
            console.log(idOfLibrary);
            
            var marker = new google.maps.Marker({
                                    position: markerToMake,
                                    map: map,
                                    title: idOfLibrary
                                  
                                });

                                google.maps.event.addDomListener(marker, 'click', function() {
                                    // window.location.href = marker.url;
                                    console.log(this.title);
                                    libraryId=this.title
                                    console.log("library ID outside for loop",libraryId);
                                    loadPage()
                                });
        };
            })
        }
    }
})


    function loadPage()
    {
         window.location="library.html";
    }