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
  google: any;
 posts: any[] = [] ;
  constructor( private http: HttpClient) { }
  
   
  
  getLocation(address: string): Observable<any>{
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
