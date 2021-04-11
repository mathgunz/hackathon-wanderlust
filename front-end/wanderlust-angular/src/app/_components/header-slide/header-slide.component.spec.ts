import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSlideComponent } from './header-slide.component';

describe('HeaderSlideComponent', () => {
  let component: HeaderSlideComponent;
  let fixture: ComponentFixture<HeaderSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
