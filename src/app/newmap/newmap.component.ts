import { Component, OnInit } from '@angular/core';
import { AgmMap,AgmCoreModule} from '@agm/core';
import {} from '@types/googlemaps';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-newmap',
  templateUrl: './newmap.component.html',
  styleUrls: ['./newmap.component.css']
})
export class NewmapComponent implements OnInit {
 place ="";
 lat : Number ;
 lng: Number;
 content ="";
 image_url="";
 markers: marker[] = [{
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  }];
  constructor(public http: HttpClient) { }

  ngOnInit() {
   
  }
  
  mapClicked($event: MouseEvent) {
  this.markers[0].lat = $event.coords.lat;
  this.markers[0].lng = $event.coords.lng;
  }
 
 CreateData(){
     this.lat = String(this.markers[0].lat);
     this.long = String(this.markers[0].lng);
     let body = {
    "post": {

    "title": this.place ,

    "content": this.content,

    "lat": this.lat,

    "long": this.long,

    "image_url": this.image_url

  }
 }
   this.http.post('https://wf-challenge-cigomos.herokuapp.com/posts', body).subscribe(
   data => {
        this.place =null;
        this.content = null;
        this.image_url = null;
        this.created_at = null;
        alert("Data Created Succesfully!");
        return null;
     },
     (err : HttpErrorResponse)=> { 
         err.message;
        this.posts = null;
        return this.posts;
      }
   
 );
 }
 
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}