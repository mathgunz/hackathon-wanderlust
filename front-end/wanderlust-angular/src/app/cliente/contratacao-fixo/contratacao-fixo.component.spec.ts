import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacaoFixoComponent } from './contratacao-fixo.component';

describe('ContratacaoFixoComponent', () => {
  let component: ContratacaoFixoComponent;
  let fixture: ComponentFixture<ContratacaoFixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratacaoFixoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacaoFixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
