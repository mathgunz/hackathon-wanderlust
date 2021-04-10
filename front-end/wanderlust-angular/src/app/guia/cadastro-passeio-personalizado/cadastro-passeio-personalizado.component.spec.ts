import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPasseioPersonalizadoComponent } from './cadastro-passeio-personalizado.component';

describe('CadastroPasseioPersonalizadoComponent', () => {
  let component: CadastroPasseioPersonalizadoComponent;
  let fixture: ComponentFixture<CadastroPasseioPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPasseioPersonalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPasseioPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
