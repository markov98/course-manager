import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../types/course';
import { api } from '../../env';
import { UserService } from '../login/user.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getCourses() {
    return this.http
      .get<Course[]>(`${api}/courses/get-all`);
  }

  editCourse(id: number, name: string, description: string) {
    return this.http
      .put(`${api}/courses/${id}`, {
        name,
        description
      }, {
        headers: {
        'X-Authorization': this.userService.accessToken
        }
      })
  }
}
