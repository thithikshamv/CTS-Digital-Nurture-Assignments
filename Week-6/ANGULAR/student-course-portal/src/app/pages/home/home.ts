import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CourseSummaryWidget
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  courseCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {
        this.courseCount = courses.length;
      },

      error: (err) => {
        console.error(err);
      }

    });

    console.log('HomeComponent initialized');

  }

  onEnrollClick(): void {

    this.message = 'Enrollment opened!';

  }

}