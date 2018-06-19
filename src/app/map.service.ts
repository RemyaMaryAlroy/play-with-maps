import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

 posts: any[] = [] ;
  constructor( private http: HttpClient) { }
  
   getPosts(){
    this.http.get('https://wf-challenge-cigomos.herokuapp.com/posts').subscribe(
     data => {
      this.posts = data as any[] ; 
       return this.posts;
     },
     (err : HttpErrorResponse)=> { 
         err.message;
        this.posts = null;
        return this.posts;
      }
     ); 
     
  }
}
