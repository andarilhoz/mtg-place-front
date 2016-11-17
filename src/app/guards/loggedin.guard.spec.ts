/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LoggedInGuard } from './loggedin.guard';

describe('Directive: Authenticated', () => {
  it('should create an instance', () => {
    let directive = new LoggedInGuard();
    expect(directive).toBeTruthy();
  });
});
