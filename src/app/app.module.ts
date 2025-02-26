import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ErrorpathComponent } from './errorpath/errorpath.component';
import { ConvercurrancyComponent } from './convercurrancy/convercurrancy.component';
import { ConvertLengthComponent } from './convert-length/convert-length.component';
import { WeightConverterComponent } from './weight-converter/weight-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  
    ErrorpathComponent,
    ConvercurrancyComponent,
    ConvertLengthComponent,
    WeightConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
