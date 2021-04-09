import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGuiaComponent } from './login-guia.component';

describe('LoginGuiaComponent', () => {
  let component: LoginGuiaComponent;
  let fixture: ComponentFixture<LoginGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGuiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
