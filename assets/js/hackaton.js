var startLocation = { lat: 36.227712, lng: -115.1398 };

$(document).ready(function() {
    // var geocoder = new google.maps.
    // $.get("/maps/geocodes.json", function(geocodes) {
    //     $(geocodes).each(function() {
    //         var address = this.address;
    //         var offer = address.offer;

    //         var info_content =
    //         "<div class='well' style='width: 320px; margin-top: 10px'>"
    //             + "<b>Peixe Urbano</b>"
    //             + "<pre style='background-color: #FFF; margin-top: 2px'>" + offer.title + "</pre>"
    //             + "<div class='row-fluid'>"
    //                 + "<div class='span6'>"
    //                     + "<img src='"+ offer.picture +"'>"
    //                 + "</div>"
    //                 + "<div class='span6'>"
    //                     + "<pre style='background-color: #FFF;'>"
    //                         + "De: R$ "+ offer.old_price
    //                         + "\nPor: R$ "+ offer.new_price
    //                     + "</pre>"
    //                     + "<a class='btn btn-primary' target='"+offer.title+"' href='"+offer.page+"'> Detalhes </a>"
    //                 + "</div>"
    //             + "</div>"
    //         + "</div>";

    //         var location = new google.maps.LatLng(address.latitude, address.longitude);
    //         var marker = new google.maps.Marker({ map: map, position: location });
    //         var info = new google.maps.InfoWindow({ content: info_content });

    //         var showMarker = function() {
    //             info.open(map, marker);
    //         }

    //         google.maps.event.addListener(marker, 'click', showMarker);
    //     });
    // });

    var map = new google.maps.Map(document.getElementById("hackaton-map"), {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(startLocation.lat, startLocation.lng)
    });
});


