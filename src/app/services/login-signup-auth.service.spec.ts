import { TestBed } from '@angular/core/testing';

import { LoginSignupAuthService } from './login-signup-auth.service';

describe('LoginSignupAuthService', () => {
  let service: LoginSignupAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSignupAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
