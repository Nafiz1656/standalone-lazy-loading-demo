
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'admin',
    loadComponent: () => import('./app/admin/admin.component').then(m => m.AdminComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./app/admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'settings', loadComponent: () => import('./app/admin/settings/settings.component').then(m => m.SettingsComponent) },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

