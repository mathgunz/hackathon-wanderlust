import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoClienteComponent } from './contato-cliente.component';

describe('ContatoClienteComponent', () => {
  let component: ContatoClienteComponent;
  let fixture: ComponentFixture<ContatoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
