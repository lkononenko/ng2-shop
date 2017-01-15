import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PersonalDetailsFormService } from './personal-details-form.service';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.scss']
})
export class PersonalDetailsFormComponent implements OnInit {
  pdFrom: FormGroup;
  formErrors = {};

  @Output() formSubmitted: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private formService: PersonalDetailsFormService) { }

  ngOnInit() {
    this.pdFrom = this.formService.buildForm();

    this.pdFrom.valueChanges.subscribe(
      data => this.formErrors = this.formService.checkFormValidation(this.pdFrom)
    );
  }

  onSubmit() {
    if (this.pdFrom.valid) {
      this.formSubmitted.emit(this.pdFrom.value);
    }
  }
}
