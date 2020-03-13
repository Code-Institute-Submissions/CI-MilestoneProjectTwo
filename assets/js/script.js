// Wait for site to load before initiating any js

$(document).ready(function () {

    $(function () {
        $(".nav-link").click(function() { 
            if ($(this).attr("id") === "navhome") {
                $("#home").removeClass("hide");
                $("#activities").addClass("hide");
                $("#fooddrink").addClass("hide");
                $("#accomodation").addClass("hide");

            } else if ($(this).attr("id") === "navactivities") {
                $("#home").addClass("hide");
                $("#activities").removeClass("hide");
                $("#fooddrink").addClass("hide");
                $("#accomodation").addClass("hide");
                $("#footer").addClass("hide");

            } else if ($(this).attr("id") === "navfooddrink") {
                $("#home").addClass("hide");
                $("#activities").addClass("hide");
                $("#fooddrink").removeClass("hide");
                $("#accomodation").addClass("hide");
                $("#footer").addClass("hide"); 

            } else if ($(this).attr("id") === "navaccomodation") {
                $("#home").addClass("hide");
                $("#activities").addClass("hide");
                $("#fooddrink").addClass("hide");
                $("#accomodation").removeClass("hide");
                $("#footer").addClass("hide");
            }
        });
    });
    
})

// Load map + map styling
    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: {
                lat: 53.483959,
                lng: -2.244644
            },
            styles: 
            [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        });
    }