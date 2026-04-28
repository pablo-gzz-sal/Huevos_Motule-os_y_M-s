import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { seoKey: 'home' },
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'menu',
    data: { seoKey: 'menu' },
    loadComponent: () => import('./features/menu/menu').then(m => m.MenuPageComponent),
  },
  {
    path: 'nosotros',
    data: { seoKey: 'about' },
    loadComponent: () => import('./features/home/sections/concept/concept').then(m => m.ConceptComponent),
  },
  {
    path: 'contacto',
    data: { seoKey: 'contact' },
    loadComponent: () => import('./features/contact/contact').then(m => m.ContactPageComponent),
  },
  { path: '**', redirectTo: '' },
];
