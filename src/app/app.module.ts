import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BasemapComponent } from './components/basemap/basemap.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    MainPageComponent,
    BasemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
