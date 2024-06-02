import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFooterComponent } from './first.component';

describe('FirstComponent', () => {
  let component: FirstFooterComponent;
  let fixture: ComponentFixture<FirstFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
