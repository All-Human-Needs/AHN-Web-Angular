import { TestBed, inject } from '@angular/core/testing';

import { InputSystemService } from './input-system.service';

describe('InputSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputSystemService]
    });
  });

  it('should be created', inject([InputSystemService], (service: InputSystemService) => {
    expect(service).toBeTruthy();
  }));
});
