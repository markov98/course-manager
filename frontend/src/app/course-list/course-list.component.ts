import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../types/course';
import { CommonModule } from '@angular/common';
import { UserService } from '../login/user.service';
import { RouterLink } from '@angular/router';
import { CourseItemComponent } from './course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CourseItemComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout() {
    
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      }
    });
  }
}
