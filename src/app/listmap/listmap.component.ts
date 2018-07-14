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
  public nomaps:boolean = true;
  constructor(private http: HttpClient) {}
  title  = [{'name' : 'id'},{'name' : 'title'},{'name' : 'content'},{'name' : 'created_at'},{'name' : 'updated_at'}];
  posts: any[] = [] ;
  
  ngOnInit() {
	   this.getPosts();
	    
       
  }
   
  getPosts(){
    this.http.get('https://wf-challenge-cigomos.herokuapp.com/posts').subscribe(
     data => {
      this.posts = data as any[] ; 
      if(this.posts.length > 0){
	   	 this.nomaps =false;
	     this.show = true;
	   }    
	   else{
	      this.show = false;
	   }
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
