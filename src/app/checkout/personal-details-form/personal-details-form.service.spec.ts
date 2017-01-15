/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonalDetailsFormService } from './personal-details-form.service';

describe('PersonalDetailsFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalDetailsFormService]
    });
  });

  it('should ...', inject([PersonalDetailsFormService], (service: PersonalDetailsFormService) => {
    expect(service).toBeTruthy();
  }));
});
