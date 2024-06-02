import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredDesignComponent } from './structured-design.component';

describe('StructuredDesignComponent', () => {
  let component: StructuredDesignComponent;
  let fixture: ComponentFixture<StructuredDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuredDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuredDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
