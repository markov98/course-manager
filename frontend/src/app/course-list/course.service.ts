import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../types/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

    getCourses() {
    return this.http
      .get<Course[]>(`http://localhost:3000/courses/get-all`);
  }
}
