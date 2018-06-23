import { Component, OnInit } from '@angular/core';
import { AgmMap,AgmCoreModule} from '@agm/core';
import {} from '@types/googlemaps';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError,AsyncSubject,BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import {MapService} from '../map.service';

@Component({
  selector: 'app-newmap',
  templateUrl: './newmap.component.html',
  styleUrls: ['./newmap.component.css']
})
export class NewmapComponent implements OnInit {
 place ="";
 lat : Number;
 lng : Number;
 content ="";
 image_url="";
 res$ = new Observable<any>();
 public show:boolean = false;
 
 markers: marker[] = [{
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  }];
  constructor(public http: HttpClient,private mapService : MapService) { }

  ngOnInit() {
   
  }
  
  getLocation(){
    this.res$=this.mapService.getLocation(this.place);
	this.show = true;
    this.res$.subscribe(
    value =>{
	   this.lat = Number(value.lat());
	   this.lng= Number(value.lng());
	   this.markers[0].lat = Number(value.lat());
	   this.markers[0].lng = Number(value.lng());
	   
	}
   );
  }
  
  mapClicked($event) {
  this.markers[0].lat = $event.coords.lat;
  this.markers[0].lng = $event.coords.lng;
  }
 
 CreateData(){
     let lat1 = String(this.markers[0].lat);
    let lng1= String(this.markers[0].lng);
     let body = {
    "post": {

    "title": this.place ,

    "content": this.content,

    "lat": lat1,

    "long": lng1,

    "image_url": this.image_url

  }
 }
   this.http.post('https://wf-challenge-cigomos.herokuapp.com/posts', body).subscribe(
   data => {
        this.place =null;
        this.content = null;
        this.image_url = null;
        alert("Data Created Succesfully!");
        return null;
     },
     (err : HttpErrorResponse)=> { 
         err.message;
         return null;
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
