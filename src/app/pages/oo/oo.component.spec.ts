import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OoComponent } from './oo.component';

describe('OoComponent', () => {
  let component: OoComponent;
  let fixture: ComponentFixture<OoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
