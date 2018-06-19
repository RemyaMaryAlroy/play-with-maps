import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deletemap',
  templateUrl: './deletemap.component.html',
  styleUrls: ['./deletemap.component.css']
})
export class DeletemapComponent implements OnInit {
 place="";
  posts: any[] = [] ;
  post;
  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.getPosts();
  }
  
 deleteMap(){ 
   this.post = this.posts.find(x => x.title == this.place);
   console.log(this.post.id);
   this.http.delete('https://wf-challenge-cigomos.herokuapp.com/posts/' + this.post.id ).subscribe(
     data => {
       alert("Deleted");
       return null;
     },
     (err : HttpErrorResponse) => {
       err.message;
       return null;
     }
   );
 }
 getPosts(){
    this.http.get('https://wf-challenge-cigomos.herokuapp.com/posts').subscribe(
     data => {
      this.posts = data as any[] ; 
     // console.log(this.posts);
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
 