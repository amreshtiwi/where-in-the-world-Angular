import { CountrySectionComponent } from './homePage/country-section/country-section/country-section.component';
import { HomepageComponent } from './homePage/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailspageComponent } from './details/detailspage/detailspage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children:[
      {
        path: '',
        component: CountrySectionComponent,
      }
    ],
  },
  {
    path: 'details/:cca2',
    component: DetailspageComponent
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
