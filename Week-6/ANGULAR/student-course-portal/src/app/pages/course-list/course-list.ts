import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];

  errorMessage = '';

  selectedCourseId = 0;

  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const search = this.route.snapshot.queryParamMap.get('search');

    if (search) {
      this.searchTerm = search;
    }

    this.loadCourses();

  }

  loadCourses(): void {

    this.isLoading = true;

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.courses = courses;
      },

      error: (err) => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },

      complete: () => {
        this.isLoading = false;
      }

    });

  }

  deleteCourse(id: number): void {

    this.courseService.deleteCourse(id).subscribe(() => {

      this.loadCourses();

    });

  }

  updateCourse(course: Course): void {

    const updatedCourse = {
      ...course,
      name: course.name + ' (Updated)'
    };

    this.courseService.updateCourse(updatedCourse).subscribe(() => {

      this.loadCourses();

    });

  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  goToCourse(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  updateSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: {
        search: this.searchTerm
      }
    });
  }

}