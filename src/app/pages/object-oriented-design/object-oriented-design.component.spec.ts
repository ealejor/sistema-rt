import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectOrientedDesignComponent } from './object-oriented-design.component';

describe('ObjectOrientedDesignComponent', () => {
  let component: ObjectOrientedDesignComponent;
  let fixture: ComponentFixture<ObjectOrientedDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectOrientedDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectOrientedDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
