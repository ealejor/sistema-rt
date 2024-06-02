import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFooterComponent } from './last.component';

describe('LastComponent', () => {
  let component: LastFooterComponent;
  let fixture: ComponentFixture<LastFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
