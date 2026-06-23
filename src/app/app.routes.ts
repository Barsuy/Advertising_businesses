import { Routes } from '@angular/router';
import { AskedQuestionsComponent } from './components/asked-questions/asked-questions';
import { HomePage } from './components/home-page/home-page';
import { AdvantagesComponent } from './components/advantages/advantages';
import { ContactUsComponent } from './components/contact-us/contact-us';    
import { BusinessSolutionsComponent } from './components/business-solutions/business-solutions';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'faq', component: AskedQuestionsComponent },
    { path: 'advantages', component: AdvantagesComponent },
    { path: 'business-solutions', component: BusinessSolutionsComponent },
    { path: 'contact-us', component: ContactUsComponent }
];
