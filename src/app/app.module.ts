import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieServiceService } from './services/movie-service.service'
import { MovieComponent } from './components/movie/movie.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
