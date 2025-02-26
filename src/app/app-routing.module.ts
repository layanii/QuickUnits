import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { error } from 'console';
import { ErrorpathComponent } from './errorpath/errorpath.component';
import { ConvercurrancyComponent } from './convercurrancy/convercurrancy.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'convercurrancy', component: ConvercurrancyComponent },
  { path: '**', component: ErrorpathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
