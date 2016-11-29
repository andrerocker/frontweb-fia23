var startLocation = { lat: 36.227712, lng: -115.1398 };

var mockedEvents = [
    { lat: 36.0864261, lng: -115.2966956, title: "Title I",  message: "Hello I" },
    { lat: 36.1144088, lng: -115.2396182, title: "Title II", message: "Hello II" },
    { lat: 37.0433076, lng: -114.5905138, title: "Title III", message: "Hello III" },
    { lat: 36.8394029, lng: -115.9633305, title: "Title IIII", message: "Heloo IIII" }
];

function homePage() {
    $(".page").hide();
    $(".map-container").show();
    renderMap();
}

function renderMap() {
    $("#hackaton-map").empty();

    var map = new google.maps.Map(document.getElementById("hackaton-map"), {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(startLocation.lat, startLocation.lng)
    });

    $(mockedEvents).each(function() {
        current = this;

        var info_content =
            "<div style='width: 320px; margin-top: 10px'>"
                +"<span class='glyphicon glyphicon-flash' aria-hidden='true'></span>"
                + "<b>"+ current.title +"</b>"
                + "<div style='margin-top:2px'>"
                    + "<div class='span6'>"
                        + "<pre style='background-color: #FFF;'>"
                            + current.message
                        + "</pre>"
                    + "</div>"
                + "</div>"
            + "</div>";

        var location = new google.maps.LatLng(current.lat, current.lng);
        var marker = new google.maps.Marker({ map: map, position: location });
        var info = new google.maps.InfoWindow({ content: info_content });

        var showMarker = function() {
            info.open(map, marker);
        }

        google.maps.event.addListener(marker, 'click', showMarker);
    });
}

function renderList() {
    var container = $(".list-container");
    container.empty();

    $(mockedEvents).each(function() {
        var current = this;
        var content =
            "<div class='bs-callout bs-callout-warning' id='callout-helper-context-color-accessibility'>"
               +"<h4>"+current.title+"</h4>"
            +"<p>"+current.message+"</p>"
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
        renderMap();
    });

    $(".nav .list").click(function() {
        $(".nav .link").removeClass("active");
        $(".nav .list").parent().addClass("active");
        $(".page").hide();
        $(".list-container").show();
        renderList();
    });
}

$(document).ready(function() {
    homePage();
    menuActions();
});
