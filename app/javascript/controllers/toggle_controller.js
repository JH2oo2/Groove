import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
// import mapboxgl from 'mapbox-gl'

export default class extends Controller {
  static targets = ["mapButton"]
  // static targets = ["mapButton"]

  // static values = {
  //   apiKey: String,
  //   markers: Array
  // }

  fire() {
    this.mapButtonTarget.classList.toggle("d-none")
    // console.log(this.mapButtonTarget.attributes)
    // console.log(document.getElementsByClassName('mapboxgl-canvas')[0].width = 1400)
  }

  connect() {
      console.log("hello from toggle controller")

      // mapboxgl.accessToken = this.apiKeyValue
      // this.map = new mapboxgl.Map({
      //   container: this.element,
      //   style: 'mapbox://styles/mapbox/streets-v10',
      // });

      //   this.map.resize()
      //   console.log(document.getElementsByClassName('mapboxgl-canvas')[0])
      // }

      // resizeMap() {
      //   this.map.resize();
      //   console.log("firing")
      // }
  }
}
