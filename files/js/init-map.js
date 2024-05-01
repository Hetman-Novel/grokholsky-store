function initMap() {
   var uluru = {
      lat: 37.775664,
      lng: -122.419273
   };

   // Mobile menu
   var mobile_map = new google.maps.Map(document.getElementById('mobile-map'), {
      zoom: 16,
      center: uluru
   });
   var marker = new google.maps.Marker({
      position: uluru,
      map: mobile_map
   });

   // Footer
   var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
   });
   var marker = new google.maps.Marker({
      position: uluru,
      map: map
   });
}