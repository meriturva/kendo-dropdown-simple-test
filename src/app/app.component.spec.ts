import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { POPUP_CONTAINER } from '@progress/kendo-angular-popup';
import { ElementRef } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DropDownListModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: POPUP_CONTAINER,
          useFactory: () => {
            return { nativeElement: document.body } as ElementRef;
          }
        }
      ]
    }).compileComponents();
  }));

  it(`should open a dropdown`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const dropDownSelect = fixture.debugElement.query(By.css('.k-select')).nativeElement;
    dropDownSelect.click();

    fixture.detectChanges();

    const kendoPopup = fixture.debugElement.query(By.css('.k-popup'));
    expect(kendoPopup).not.toBeNull();
  });
});
