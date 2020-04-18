import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GenericComponent } from './components/pages/generic/generic.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ContactComponent } from './components/shared/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    GenericComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
