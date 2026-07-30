import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck()]
      ],

      courseId: [
        '',
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])

    });

  }

  // Submit
  onSubmit() {

    this.submitted = true;

    console.log('Form Value:', this.enrollForm.value);

    console.log('Raw Value:', this.enrollForm.getRawValue());

    // value excludes disabled controls.
    // getRawValue() includes disabled controls.

  }

  // Reset
  resetForm() {

    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });

    this.additionalCourses.clear();

    this.submitted = false;

  }

  // Getter
  get additionalCourses(): FormArray<FormControl> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
  }

  // Add Course
  addCourse() {

    this.additionalCourses.push(

      new FormControl('', Validators.required)

    );

  }

  // Remove Course
  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }

  // Custom Validator
  noCourseCode(control: AbstractControl): ValidationErrors | null {

    if (
      control.value &&
      control.value.toString().startsWith('XX')
    ) {

      return { noCourseCode: true };

    }

    return null;

  }

  // Async Validator
  simulateEmailCheck(): AsyncValidatorFn {

    return (control: AbstractControl) => {

      return new Promise<ValidationErrors | null>((resolve) => {

        setTimeout(() => {

          if (
            control.value &&
            control.value.includes('test@')
          ) {

            resolve({ emailTaken: true });

          } else {

            resolve(null);

          }

        }, 800);

      });

    };

  }

}