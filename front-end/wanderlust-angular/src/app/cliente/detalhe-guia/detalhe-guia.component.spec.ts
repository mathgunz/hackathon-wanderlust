import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheGuiaComponent } from './detalhe-guia.component';

describe('DetalheGuiaComponent', () => {
  let component: DetalheGuiaComponent;
  let fixture: ComponentFixture<DetalheGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheGuiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
