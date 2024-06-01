import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfooterComponent } from './ofooter.component';

describe('OfooterComponent', () => {
  let component: OfooterComponent;
  let fixture: ComponentFixture<OfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
