import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { Category1Component } from './components/pages/categories/category1/category1.component';
import { Category2Component } from './components/pages/categories/category2/category2.component';
import { Category3Component } from './components/pages/categories/category3/category3.component';
import { Category4Component } from './components/pages/categories/category4/category4.component';
import { Category5Component } from './components/pages/categories/category5/category5.component';
import { ArticleComponent } from './components/article/article.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HeaderComponent } from './components/pages/categories/category-header/header.component';
import { AvatarSectionComponent } from './components/pages/about-us/avatar-section/avatar-section.component';
declare const require: any;
const smoothscroll = require('smoothscroll-polyfill');
smoothscroll.polyfill();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AuthComponent,
    PageNotFoundComponent,
    ContactComponent,
    BlogComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    Category5Component,
    HeaderComponent,
    ArticleComponent,
    AboutUsComponent,
    AvatarSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
