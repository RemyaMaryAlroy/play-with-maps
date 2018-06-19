import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-updatemap',
  templateUrl: './updatemap.component.html',
  styleUrls: ['./updatemap.component.css']
})
export class UpdatemapComponent implements OnInit {
 public show:boolean = false;
 posts: any[] = [] ;
 post ;
 place="";
 content ="";
 image_url="";
 lat: number ;
 lng: number ;
 created_at="";
 markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  }];
 constructor(public http: HttpClient) { }
 ngOnInit() {
   this.getPosts();
  }
  UpdateData(){
 let length = this.markers.length;
    let lat1 = String(this.markers[length-1].lat);
    let long1= String(this.markers[length-1].lng);
    let body = {
    "post": {

    "title": this.place ,

    "content": this.content,

    "lat": lat1,

    "long": long1,

    "image_url": this.image_url

  }
    
    }
  
  
 this.http.put('https://wf-challenge-cigomos.herokuapp.com/posts/'+ this.post.id, body).subscribe(
   data => {
        this.place =null;
        this.content = null;
        this.image_url = null;
        this.created_at = null;
        this.show = false;
        alert("Data Updated Succesfully!");
        return null;
     },
     (err : HttpErrorResponse)=> { 
         err.message;
        this.posts = null;
        return this.posts;
      }
   
 );

 }
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
   
  }
  getData(){
     this.post = this.posts.find(x => x.title == this.place);
     if(this.post != null){
       this.show = true;
       this.place = this.post.title;
       this.content = this.post.content;
        this.image_url = this.post.image_url;
        let date= new Date(this.post.created_at);
        this.created_at = date;
        this.lat = Number(this.post.lat);
        this.long = Number(this.post.long);
        this.markers[0].lat = Number(this.post.lat);
        this.markers[0].lng = Number(this.post.long);
      }
     else{
       alert("No such Data");
       }
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
 

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
