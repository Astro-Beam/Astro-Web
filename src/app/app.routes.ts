import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        (c) => c.HomeComponent
      )
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      )
  },
  {
    path: 'members',
    loadComponent: () =>
      import('./members/members.component').then(
        (c) => c.MembersComponent
      )
  },
  {
    path: 'articles',
    loadComponent: () =>
      import('./articles/articles.component').then(
        (c) => c.ArticlesComponent
      )
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./news/news.component').then(
        (c) => c.NewsComponent
      )
  },
  {
    path: 'open-positions',
    loadComponent: () =>
      import('./open-positions/open-positions.component').then(
        (c) => c.OpenPositionsComponent
      )
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then(
        (c) => c.ContactComponent
      )
  },
];
