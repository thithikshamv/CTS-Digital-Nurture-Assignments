import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  CommonModule,
  NgClass,
  NgStyle
} from '@angular/common';

import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgStyle,
    HighlightDirective,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }

  toggleEnrollment() {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

  }

  isEnrolled(): boolean {

    return this.enrollmentService.isEnrolled(this.course.id);

  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {

    return {
      'card--enrolled': this.isEnrolled(),
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded
    };

  }
  getBorderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      case 'pending':
        return 'gray';

      default:
        return 'black';
    }
  }
  

}