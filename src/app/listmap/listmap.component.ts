import { Component, OnInit } from '@angular/core';
import {MapService} from '../map.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-listmap',
  templateUrl: './listmap.component.html',
  styleUrls: ['./listmap.component.css'],
  providers: [MapService]
})
export class ListmapComponent implements OnInit {
  public show:boolean = false;
  constructor(private mapservice : MapService,
  private http: HttpClient) {}
  title  = [{'name' : 'id'},{'name' : 'title'},{'name' : 'content'},{'name' : 'created_at'},{'name' : 'updated_at'}];
  posts: any[] = [] ;
  
  ngOnInit() {
	   this.getPosts();
        this.show = true;
       
  }
   getPostsMap(){
     let res$ = new Observable<any>();
	 res$ = this.mapservice.getPosts();
	 res$.subscribe(
	    value =>{
		  console.log(value);
		 
		}
	 );
   }
  getPosts(){
    this.http.get('https://wf-challenge-cigomos.herokuapp.com/posts').subscribe(
     data => {
      this.posts = data as any[] ; 
      console.log(this.posts);
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
