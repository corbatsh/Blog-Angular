import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { Category1Component } from './components/pages/categories/category1/category1.component';
import { Category2Component } from './components/pages/categories/category2/category2.component';
import { Category3Component } from './components/pages/categories/category3/category3.component';
import { Category4Component } from './components/pages/categories/category4/category4.component';
import { Category5Component } from './components/pages/categories/category5/category5.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'category1', redirectTo: 'Category1', pathMatch: 'full' },
  { path: 'category2', redirectTo: 'Category2', pathMatch: 'full' },
  { path: 'category3', redirectTo: 'Category3', pathMatch: 'full' },
  { path: 'category4', redirectTo: 'Category4', pathMatch: 'full' },
  { path: 'category5', redirectTo: 'Category5', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'admin/login', component: AuthComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'Category1', component: Category1Component },
  { path: 'Category2', component: Category2Component },
  { path: 'Category3', component: Category3Component },
  { path: 'Category4', component: Category4Component },
  { path: 'Category5', component: Category5Component },
  { path: 'about', component: AboutUsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

