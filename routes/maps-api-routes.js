
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



console.log(libraries);

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
  
        lat = position.coords.latitude,
          lng = position.coords.longitude
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: new google.maps.LatLng(lat, lng),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        startLat = lat
        startLong = lng
        latLon = (startLat + "," + startLong)
        // bandInfo(latLon)
        console.log(latLon)
        
      })
  
    }
  
  }

  getLocation()