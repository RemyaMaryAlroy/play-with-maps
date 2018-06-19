import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-showmap',
  templateUrl: './showmap.component.html',
  styleUrls: ['./showmap.component.css']
})
export class ShowmapComponent implements OnInit {
 post ;
  lat : number= 51.673858;
  long :number= 7.815982;
  content ="";
 image_url="";
 place:"";
 created_at="";
 posts: any[] = [] ;
  public show:boolean = false;
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  }];
  constructor(private route: ActivatedRoute,
  private router: Router,
  private http: HttpClient) { }
  
  ngOnInit() {
  this.route.params.subscribe(
      (params) => {    
        
      }
      
    );
    this.getPosts();
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
    getData()
    {
      this.post = this.posts.find(x => x.title == this.place);
      if(this.post != null){
       this.show = true;
       this.place = this.post.title;
       this.content = this.post.content;
        this.image_url = this.post.image_url;
        this.created_at = this.post.created_at;
        this.lat = Number(this.post.lat);
        this.long = Number(this.post.long);
        this.markers[0].lat = Number(this.post.lat);
        this.markers[0].lng = Number(this.post.long);
      }
     else{
       alert("No such Data");
       }
    }
    
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
