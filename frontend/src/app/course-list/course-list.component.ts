import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../types/course';
import { CommonModule } from '@angular/common';
import { UserService } from '../login/user.service';
import { RouterLink } from '@angular/router';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CourseItemComponent, ReactiveFormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})

export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = []
  form: FormGroup;

  constructor(
    private courseService: CourseService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      searchQuery: ['']
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        console.log('Successful Logout!');
      }
    })
   }

  search(): void {
    const searchQuery = this.form.value.searchQuery.toLowerCase();

    this.filteredCourses = this.courses.filter((currCourse) => {
      return currCourse.name.toLowerCase().includes(searchQuery) ||
        currCourse.description.toLowerCase().includes(searchQuery);
    });
  }


  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = this.courses;
      }
    });
  }
}
