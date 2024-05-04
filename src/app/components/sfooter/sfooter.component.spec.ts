import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfooterComponent } from './sfooter.component';

describe('SfooterComponent', () => {
  let component: SfooterComponent;
  let fixture: ComponentFixture<SfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
