import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGuiaComponent } from './lista-guia.component';

describe('ListaGuiaComponent', () => {
  let component: ListaGuiaComponent;
  let fixture: ComponentFixture<ListaGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGuiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
