function geoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition();
    }
    else{
        document.write("No esta disponible.");
    }
}



// navigator.geolocation.GeolocationCoordinates.altitudeAccuracy;