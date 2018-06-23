import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AgmMap,AgmCoreModule} from '@agm/core';
import {} from '@types/googlemaps';
import { Observable, Subject, throwError,AsyncSubject,BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

 posts: any[] = [] ;
  constructor( private http: HttpClient) { }
  
   getPosts(){
     let res$ = new Observable<any>();
	 let res1 = new Subject();
	 res$ = this.http.get('https://wf-challenge-cigomos.herokuapp.com/posts');
	 res$.subscribe(
	   res =>{
	     res1.next(res);
		 res1.complete();
	   }
	   error =>{
	      res1.next(error);
		  res1.complete();
	   }
	 );
	 return res$;
  }
  
  getLocation(address: string): Observable<any>{
     console.log('Getting address: ', address);
    let geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
        geocoder.geocode({
            'address': address
        }, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                observer.next(results[0].geometry.location);
                observer.complete();
            } else {
                console.log('Error: ', results, ' & Status: ', status);
                observer.error();
            }
        });
    }); 
  }
}
