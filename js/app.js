var interestingLocations = [
	{
		name: "Fair Haven, NJ",
		position: {lat: 40.3619, lng: -74.0388}
	},
	{
		name: "SeaBright, NJ",
		position: {lat: 40.3589, lng: -73.9743}
	}
];

var marker = function(data) {
	var newMarker = new google.maps.Marker({});
	newMarker.name = ko.observable(data.name);
	newMarker.position = ko.observable(data.position);
}

function MyViewModel() {
    var self = this;
    self.map;
  	self.markerArray = ko.observableArray([]);

  	interestingLocations.forEach(function(data) {
  		var newMarker = new marker(data);
  		self.markerArray.push(newMarker);
  		console.log("added marker to array");
  	});

	self.initMap = function() {
		self.map = new google.maps.Map(document.getElementById('map'), {
	    	center: {lat: 40.3619, lng: -74.0388},
	    	zoom: 12,
	    	mapTypeId: google.maps.MapTypeId.HYBRID
	  	});
		self.marker = new google.maps.Marker({
	    	position: {lat: 40.3619, lng: -74.0388},
	    	map: map,
	    	title: 'Hello World!'
		});
	}




    self.mapTwo = ko.observable({
        lat: ko.observable(40.76),
        lng:ko.observable(-73.98)
    });
}



var viewModel = new MyViewModel();

ko.applyBindings(viewModel);



/*
ko.bindingHandlers.map = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                var mapObj = ko.utils.unwrapObservable(valueAccessor());
                var latLng = new google.maps.LatLng(
                    ko.utils.unwrapObservable(mapObj.lat),
                    ko.utils.unwrapObservable(mapObj.lng));
                var mapOptions = { center: latLng,
                                  zoom: 6,
                                  mapTypeId: google.maps.MapTypeId.ROADMAP};

                mapObj.googleMap = new google.maps.Map(element, mapOptions);

                mapObj.marker = new google.maps.Marker({
                    map: mapObj.googleMap,
                    position: latLng,
                    title: "You Are Here",
                    draggable: true
                });

                mapObj.onChangedCoord = function(newValue) {
                    var latLng = new google.maps.LatLng(
                        ko.utils.unwrapObservable(mapObj.lat),
                        ko.utils.unwrapObservable(mapObj.lng));
                    mapObj.googleMap.setCenter(latLng);
                };

                mapObj.onMarkerMoved = function(dragEnd) {
                    var latLng = mapObj.marker.getPosition();
                    mapObj.lat(latLng.lat());
                    mapObj.lng(latLng.lng());
                };

                mapObj.lat.subscribe(mapObj.onChangedCoord);
                mapObj.lng.subscribe(mapObj.onChangedCoord);

                google.maps.event.addListener(mapObj.marker, 'dragend', mapObj.onMarkerMoved);

                $("#" + element.getAttribute("id")).data("mapObj",mapObj);
            }
        };
*/