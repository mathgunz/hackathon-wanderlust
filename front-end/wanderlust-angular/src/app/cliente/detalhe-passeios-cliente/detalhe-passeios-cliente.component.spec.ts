import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePasseiosClienteComponent } from './detalhe-passeios-cliente.component';

describe('DetalhePasseiosClienteComponent', () => {
  let component: DetalhePasseiosClienteComponent;
  let fixture: ComponentFixture<DetalhePasseiosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePasseiosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePasseiosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
