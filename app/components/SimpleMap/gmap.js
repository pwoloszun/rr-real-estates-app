import { Marker } from './marker';

const google = window['google'];
if (!google) {
  throw "Google Maps not available";
}

export class GMap {

  constructor(element) {
    let center = new google.maps.LatLng(52.14, 21.0);
    this._map = new google.maps.Map(element, {
      center: center,
      zoom: 6
    });
    this._markers = [];
    this._latLngs = [];
  }

  createMarker(object) {
    let latLng = new google.maps.LatLng(object.lat, object.lng);
    this._latLngs.push(latLng);
    let marker = new google.maps.Marker({
      position: latLng,
      map: this._map,
      title: object.title
    });
    this._markers.push(marker);
    return new Marker(marker, object);
  }

}
