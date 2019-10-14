var marker;
var markers=[];
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
                                    
                                });
                         

                                // (markers[j]);
                // clickMarker.push(marker)
            }
                // markers.push(marker);
            // console.log(markers);
            

            
            // marker.addListener('click', function() {
            //    console.log("clicked");
   
               
            // })
        });
            }
        }
    })

    // google.maps.event.addListener(marker, 'click', function() {
    //     console.log("clicked");
        
    // });




    //     var contentString = '<div>test</div>';
    //     var infowindow = new google.maps.InfoWindow({
    //         content: contentString
    //       });
    //     infowindow.open(this, marker);
    //   });
    // google.maps.event.addListener(marker, 'click', (function(marker, id) {
    // alert("this.idOfLibrary")





















    // $.get("/api/libraries").then(function(data) {
    //     console.log("first for loop",data);

    //  for (let i = 0; i < data.length; i++) {
    //             console.log("this is logging the whole libraries in for loop",data);
    //             lat2 = data[i].lattitude
    //             long2 = data[i].longitude
    //             // location=data[i].location
    //             markerToMake = {
    //                 lat: lat2,
    //                 lng: long2
    //             }
    //             var marker = new google.maps.Marker({
    //                 position: markerToMake,
    //                 map: map,
    //                 title: "location"
    //             });


   

 
        // console.log("this is me logging libraries",libraries);

        //     for (let i = 0; i < libraries.length; i++) {
        //         console.log("this is logging the whole libraries in for loop",libraries);
                
                // lat2 = libraries[i].lattitude
                // long2 = libraries[i].longitude
                // location=libraries[i].location
                // markerToMake = {
                //     lat: lat2,
                //     lng: long2
                // }
                // var marker = new google.maps.Marker({
                //     position: markerToMake,
                //     map: map,
                //     title: location
                // });
        //     }
        // })



// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             console.log("inside function",libraries.length);
//             console.log("inside function",libraries);
//             lat = position.coords.latitude,
//             lng = position.coords.longitude
//             console.log("my location", lat, lng);
            
//             var map = new google.maps.Map(document.getElementById('map'), {
//                 zoom: 13,
//                 center: new google.maps.LatLng(lat, lng),
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             })
//             console.log("inside locations function",libraries.length)
            
//             for (let i = 0; i < libraries.length; i++) {
//                 console.log("this is logging the whole libraries in for loop",libraries);
                
//                 lat2 = libraries[i].lattitude
//                 long2 = libraries[i].longitude
//                 location=libraries[i].location
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

// google.maps.event.addListener(marker, 'click', function() {
    
//   });
