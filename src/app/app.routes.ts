import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CookieConsentComponent } from './pages/cookie-consent/cookie-consent.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookie-consent', component: CookieConsentComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'terms-and-condition', component: TermsAndConditionsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
