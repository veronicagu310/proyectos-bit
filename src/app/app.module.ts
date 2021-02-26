import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './pages/index/index.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuLoginComponent } from './components/menu-login/menu-login.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconDetailComponent } from './components/icon-detail/icon-detail.component';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    IndexComponent,
    MenuComponent,
    HistoryComponent,
    LoginComponent,
    MenuLoginComponent,
    ContactUsComponent,
    FooterComponent,
    IconDetailComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
