import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursTabComponent } from './tours-tab.component';

describe('ToursTabComponent', () => {
  let component: ToursTabComponent;
  let fixture: ComponentFixture<ToursTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToursTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
