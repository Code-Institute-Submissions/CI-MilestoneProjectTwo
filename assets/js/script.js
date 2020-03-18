// Wait for site to load before initiating any js

$(document).ready(function () {

    // Used to display and hide feature sections when a nav item is selected.

    $(function () {
        $(".nav-link").click(function () {
            if ($(this).attr("id") === "navhome") {
                $("#home").removeClass("hide");
                $("#activities, #fooddrink ,#accomodation, #locationdetails").addClass("hide");

            } else if ($(this).attr("id") === "navactivities") {
                $("#activities").removeClass("hide");
                $("#home, #fooddrink, #accomodation, #locationdetails").addClass("hide");


            } else if ($(this).attr("id") === "navfooddrink") {
                $("#fooddrink").removeClass("hide");
                $("#home, #activities, #accomodation, #locationdetails").addClass("hide");

            } else if ($(this).attr("id") === "navaccomodation") {
                $("#accomodation").removeClass("hide");
                $("#home, #activities, #fooddrink, #locationdetails").addClass("hide");
            }
        });
    });


    // Used to display and hide feature sections when a one of the home 'buttons' is selected on the landing screen.

    $(function () {
        $(".feature").click(function () {
            if ($(this).attr("id") === "homeactivities") {
                $("#activities").removeClass("hide");
                $("#home, #fooddrink, #accomodation, #locationdetails").addClass("hide");

            } else if ($(this).attr("id") === "homefooddrink") {
                $("#fooddrink").removeClass("hide");
                $("#home, #activities, #accomodation, #locationdetails").addClass("hide");

            } else if ($(this).attr("id") === "homeaccomodation") {
                $("#accomodation").removeClass("hide");
                $("#home, #activities, #fooddrink, #locationdetails").addClass("hide");
            }
        });
    });




    // Used add styling to location divs when hovered over
    $(function () {
        $(".locationimage").hover(function () {
            $(this).css({ 'transform': 'scale(1.2)', 'transition': 'transform 400ms ease-in-out' });
            $(this).siblings('.locationname').css({ 'transform': 'scale(1.2)', 'transition': 'transform 400ms ease-in-out' });
        }, function () {
            $(this).css({ 'transform': 'scale(1)', 'transition': 'transform 400ms ease-in-out' });
            $(this).siblings('.locationname').css({ 'transform': 'scale(1)', 'transition': 'transform 400ms ease-in-out' });
        });
    });

    // used to hide feature sections and display the location details section.

    $(function () {
        $(".location").click(function () {
            $("#locationdetails").removeClass("hide");
            $("#home, #activities, #fooddrink, #accomodation").addClass("hide");
        });
    });

});

// Function to load & style map

function initMap() {
    var mapDefault = {
        center: new google.maps.LatLng(53.483959, -2.244644),
        zoom: 12,
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
    };
    map = new google.maps.Map(document.getElementById("map"), mapDefault);
}

// create markers array (to later enable us to remove displayed markers)

var markers = []

// Function to display details and map marker of the selected location 

function displayDetails() {
    //call the initMap function
    initMap();

    $(".location").click(function () {
        // define the thisLocation variable as the ID of the selected location (to allow us to identify applicable details in the JSON data)
        var thisLocation = this.id;
        // get the JSON file
        $.getJSON('assets/data/location_details.json', function (data) {
            //iterate through each object
            $.each(data.location_details, function (i, value) {
                //Where the ID of the selected location matches the an ID within the array
                if (value.ID === thisLocation) {
                    deleteMarkers();
                    //identify the lat,lng location
                    var markerLocation = new google.maps.LatLng(value.lat, value.lng);
                    //add a marker to the map at the relevant location
                    var marker = new google.maps.Marker({
                        position: markerLocation,
                        map: map,
                    });
                    // add marker details into the marker array (to be able to remove later)
                    markers.push(marker);
                    //Display the applicable details of the selected location
                    document.getElementById("locationvenue").innerHTML = value.Name;
                    document.getElementById("locationtype").innerHTML = value.Type;
                    document.getElementById("locationsubtype").innerHTML = value.Subtype;
                    document.getElementById("locationwebsite").innerHTML = value.Website;
                    document.getElementById("locationphone").innerHTML = value.PhoneNumber;
                    document.getElementById("locationdescription").innerHTML = value.Description;
                }
            });
        });
    });
};


// function to iterate through the markers array, and set a clear map again
function deleteMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
    //clear the markers array
    markers = [];
};

// Call the displayDetails function
displayDetails();