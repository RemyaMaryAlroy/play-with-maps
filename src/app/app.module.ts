import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MapService} from './map.service';
import { AppComponent } from './app.component';
import { NewmapComponent } from './newmap/newmap.component';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ShowmapComponent } from './showmap/showmap.component';
import { ListmapComponent } from './listmap/listmap.component';
import { AgmMap,AgmCoreModule } from '@agm/core';
import {FormsModule} from '@angular/forms';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UpdatemapComponent } from './updatemap/updatemap.component';
import { DeletemapComponent } from './deletemap/deletemap.component';


@NgModule({
  declarations: [
    AppComponent,
    NewmapComponent,
    ShowmapComponent,
    ListmapComponent,
    AppHeaderComponent,
    UpdatemapComponent,
    DeletemapComponent
   
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     FormsModule,
     AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWDHXGOPBQ6ZJEzm82wRPtcwEF7iOxn2w',
      libraries: ["places"]
    })
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
