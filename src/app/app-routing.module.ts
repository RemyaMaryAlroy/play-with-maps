import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShowmapComponent } from './showmap/showmap.component';
import { ListmapComponent } from './listmap/listmap.component';
import { NewmapComponent } from './newmap/newmap.component';
import { UpdatemapComponent } from './updatemap/updatemap.component';
import { DeletemapComponent } from './deletemap/deletemap.component';

const routes: Routes = [
  { path: 'showmap', component: ShowmapComponent},
  { path: 'newmap',component: NewmapComponent },
  { path:'updatemap', component: UpdatemapComponent },
  { path: 'deletemap', component: DeletemapComponent },
  { path: 'listmap', component:ListmapComponent},
  { path: '',component: ListmapComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
    CommonModule,
	RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
