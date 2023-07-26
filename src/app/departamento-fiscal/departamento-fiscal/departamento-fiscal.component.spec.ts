import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoFiscalComponent } from './departamento-fiscal.component';

describe('DepartamentoFiscalComponent', () => {
  let component: DepartamentoFiscalComponent;
  let fixture: ComponentFixture<DepartamentoFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
