import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../types/course';
import { api }  from '../../env';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

    getCourses() {
    return this.http
      .get<Course[]>(`${api}/courses/get-all`);
  }
}
