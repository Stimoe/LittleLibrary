var libraries = [{
        longitude: -122.33872,
        lattitude: 47.68631
    },
    {
        longitude: -122.34197,
        lattitude: 47.68424
    },
    {
        longitude: -122.35141,
        lattitude: 47.6857
    },
    {
        longitude: -122.351411,
        lattitude: 47.6857
    }

]


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

            lat = position.coords.latitude,
                lng = position.coords.longitude
            console.log("my location", lat, lng);

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            for (let i = 0; i < libraries.length; i++) {

                lat2 = libraries[i].lattitude
                long2 = libraries[i].longitude
                markerToMake = {
                    lat: lat2,
                    lng: long2
                }
                var marker = new google.maps.Marker({
                    position: markerToMake,
                    map: map,
                    title: "Little Library"
                });
            }
        })
    }
}






getLocation(libraries)