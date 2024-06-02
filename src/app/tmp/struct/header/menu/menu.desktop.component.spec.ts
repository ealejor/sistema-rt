import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesktopComponent } from './menu.desktop.component';

describe('MenuDesktopComponent', () => {
  let component: MenuDesktopComponent;
  let fixture: ComponentFixture<MenuDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
