import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePasseiosFixoComponent } from './detalhe-passeios-fixo.component';

describe('DetalhePasseiosFixoComponent', () => {
  let component: DetalhePasseiosFixoComponent;
  let fixture: ComponentFixture<DetalhePasseiosFixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePasseiosFixoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePasseiosFixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
