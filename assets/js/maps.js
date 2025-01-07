function initAutocomplete() {
    let nightStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
        { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
        { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
        { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
        { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
    ];
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 38.029704, lng: -4.079922 },
      zoom: 7,
      mapTypeId: "roadmap",
      styles: nightStyle,
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
  
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // The SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
  
    let markers = [];
  
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          }),
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    // Add multiple markers
    let locations = [
        { lat: 38.029704, lng: -4.079922, title: 'Repsol' },
        { lat: 36.87495, lng: -2.445126 , title: 'Repsol' },
        { lat: 37.029486, lng: -4.534683 , title: 'Repsol' },
        { lat: 37.232233, lng: -7.392492 , title: 'Cepsa' },
        { lat: 37.575457, lng: -5.808284 , title: 'Vitogas' },
        { lat: 36.660897, lng: -4.502379 , title: 'BP' },
        { lat: 37.86956, lng: -4.800534 , title: 'Repsol' },
        { lat: 37.876988, lng: -4.841453 , title: 'Repsol' },
        { lat: 37.897341, lng: -4.766562 , title: 'Repsol' },
        { lat: 36.758424, lng: -2.805377 , title: 'Repsol' },
        { lat: 36.500262, lng: -4.68596 , title: 'Repsol' },
        { lat: 37.19075, lng: -3.636306 , title: 'Repsol' },
        { lat: 37.18386, lng: -3.624074 , title: 'Repsol' },
        { lat: 38.196506, lng: -3.673045 , title: 'Repsol' },
        { lat: 37.508041, lng: -6.074348 , title: 'Repsol' },
        { lat: 37.239041, lng: -6.952461 , title: 'Repsol' },
        { lat: 37.267432, lng: -6.958268 , title: 'Repsol' },
        { lat: 37.777906, lng: -3.811594 , title: 'Repsol' },
        { lat: 36.664417, lng: -6.113078 , title: 'Repsol' },
        { lat: 36.688966, lng: -6.127735 , title: 'Repsol' },
        { lat: 37.164523, lng: -4.137163 , title: 'Repsol' },
        { lat: 36.200426, lng: -5.515106 , title: 'Repsol' },
        { lat: 37.351797, lng: -6.047518 , title: 'Repsol' },
        { lat: 36.736374, lng: -4.434339 , title: 'Repsol' },
        { lat: 36.690154, lng: -4.48294 , title: 'Repsol' },
        { lat: 36.510248, lng: -4.896932 , title: 'Repsol' },
        { lat: 37.694688, lng: -6.604117 , title: 'Repsol' },
        { lat: 38.937907, lng: -1.757889 , title: 'Repsol' },
        { lat: 36.740346, lng: -3.58427 , title: 'Repsol' }
    ];

    locations.forEach(function(location) {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            animation: google.maps.Animation.DROP
        });
    });
  }
  
  window.initAutocomplete = initAutocomplete;