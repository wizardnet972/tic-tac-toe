import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { AuthNgrxModule } from './auth-ngrx.module';

export function main() {
   describe('Auth Ngrx component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AuthNgrxModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

	          expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-auth-ngrx></sd-auth-ngrx>'
})
class TestComponent {}
