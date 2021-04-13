import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseiosAnterioresComponent } from './passeios-anteriores.component';

describe('PasseiosAnterioresComponent', () => {
  let component: PasseiosAnterioresComponent;
  let fixture: ComponentFixture<PasseiosAnterioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasseiosAnterioresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseiosAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
