


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