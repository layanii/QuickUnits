import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { error } from 'console';
import { ErrorpathComponent } from './errorpath/errorpath.component';
import { ConvercurrancyComponent } from './convercurrancy/convercurrancy.component';

import { ConvertLengthComponent } from './convert-length/convert-length.component';
import { WeightConverterComponent } from './weight-converter/weight-converter.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },
  { path: 'convertCurrancy', component: ConvercurrancyComponent },
  { path: 'convertLength', component: ConvertLengthComponent },
  { path: 'convertWeight', component: WeightConverterComponent },
  { path: '**', component: ErrorpathComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
