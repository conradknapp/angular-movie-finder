import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieServiceService } from './services/movie-service.service'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
