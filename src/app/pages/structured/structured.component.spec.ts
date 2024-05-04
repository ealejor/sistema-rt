import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredComponent } from './structured.component';

describe('StructuredComponent', () => {
  let component: StructuredComponent;
  let fixture: ComponentFixture<StructuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
