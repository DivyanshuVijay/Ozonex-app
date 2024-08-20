import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwaComponent } from './rwa.component';

describe('RwaComponent', () => {
  let component: RwaComponent;
  let fixture: ComponentFixture<RwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
