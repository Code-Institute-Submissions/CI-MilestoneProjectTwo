// Wait for site to load before initiating any js

$(document).ready(function () {

    // Used to display and hide feature sections when a nav item is selected.

    $(function () {
        $(".nav-link").click(function () {
            if ($(this).attr("id") === "navhome") {
                $("#home").removeClass("hide");
                $("#activities, #fooddrink ,#accomodation").addClass("hide");

            } else if ($(this).attr("id") === "navactivities") {
                $("#activities").removeClass("hide");
                $("#home, #fooddrink, #accomodation").addClass("hide");


            } else if ($(this).attr("id") === "navfooddrink") {
                $("#fooddrink").removeClass("hide");
                $("#home, #activities, #accomodation").addClass("hide");

            } else if ($(this).attr("id") === "navaccomodation") {
                $("#accomodation").removeClass("hide");
                $("#home, #activities, #fooddrink ").addClass("hide");
            }
        });
    });


    // Used to display and hide feature sections when a one of the home 'buttons' is selected on the landing screen.

    $(function () {
        $(".feature").click(function () {
            if ($(this).attr("id") === "homeactivities") {
                $("#activities").removeClass("hide");
                $("#home, #fooddrink, #accomodation").addClass("hide");

            } else if ($(this).attr("id") === "homefooddrink") {
                $("#fooddrink").removeClass("hide");
                $("#home, #activities, #accomodation").addClass("hide");

            } else if ($(this).attr("id") === "homeaccomodation") {
                $("#accomodation").removeClass("hide");
                $("#home, #activities, #fooddrink").addClass("hide");
            }
        });
    });




    // Used add styling to location divs when hovered over
    $(function () {
        $(".location").hover(function () {
            $(this).children('.locationimage').css({ 'transform': 'scale(1.2)', 'transition': 'transform 400ms ease-in-out' });
            $(this).children('.locationname').css({ 'transform': 'scale(1.2)', 'transition': 'transform 400ms ease-in-out' });
        }, function () {
            $(this).children('.locationimage').css({ 'transform': 'scale(1)', 'transition': 'transform 400ms ease-in-out' });
            $(this).children('.locationname').css({ 'transform': 'scale(1)', 'transition': 'transform 400ms ease-in-out' });
        })
    })

// used to hide feature sections and display the location details section.

    $(function () {
        $(".location").click(function () {
                $("#locationdetails").removeClass("hide");
                $("#home, #activities, #fooddrink, #accomodation").addClass("hide");
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