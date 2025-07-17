import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: CourseListComponent },
    { path: 'error', component: LoginComponent }
];
