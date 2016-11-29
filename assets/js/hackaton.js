var startLocation = { lat: 36.2509994, lng: -113.6920185 };
var serviceEndpoint = "https://rrpi5h6iy1.execute-api.us-west-2.amazonaws.com/stage/fiaalerts";
var currentMap = createMap();
var markersArray = [];

function createMap() {
    google.maps.Map.prototype.clearOverlays = function() {
        for (var i = 0; i < markersArray.length; i++ ) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    
    return new google.maps.Map(document.getElementById("hackaton-map"), {
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(startLocation.lat, startLocation.lng)
    });
}

function getEvents(location, callback) {
    $.getJSON(serviceEndpoint, function(result) {
        callback(result.records);
    });
}

function homePage() {
    $(".page").hide();
    $(".map-container").show();
    getEvents(startLocation, renderMap);
}

function renderMap(events) {
    console.log(events);
   // currentMap.clearOverlays();
   // $("#hackaton-map").empty();

    $(events).each(function() {
        current = this;

        var info_content =
            "<div style='width: 320px; margin-top: 10px'>"
                +"<span class='glyphicon glyphicon-flash' aria-hidden='true'></span>"
                + "<b>"+ current.title +"</b>"
            + "</div>";

        var location = new google.maps.LatLng(current.lat, current.lng);
        var marker = new google.maps.Marker({ map: currentMap, position: location });
        markersArray.push(marker);
        var info = new google.maps.InfoWindow({ content: info_content });

        info.open(currentMap, marker);
    });

    setTimeout(function() {
        console.log("polling");
        getEvents(startLocation, renderMap);
    }, 5000);
}

function renderList(events) {
    var container = $(".list-container");
    container.empty();

    $(events).each(function() {
        var current = this;
        var content =
            "<div class='bs-callout bs-callout-warning' id='callout-helper-context-color-accessibility'>"
               +"<h4>"+current.title+"</h4>"
            +"</div>";

        container.append(content);
    });
}

function menuActions() {
    $(".nav .map").click(function() {
        $(".nav .link").removeClass("active");
        $(".nav .map").parent().addClass("active");
        $(".page").hide();
        $(".map-container").show();
        getEvents(startLocation, renderMap);
    });

    $(".nav .list").click(function() {
        $(".nav .link").removeClass("active");
        $(".nav .list").parent().addClass("active");
        $(".page").hide();
        $(".list-container").show();
        getEvents(startLocation, renderList);
    });
}

$(document).ready(function() {
    homePage();
    menuActions();
});
