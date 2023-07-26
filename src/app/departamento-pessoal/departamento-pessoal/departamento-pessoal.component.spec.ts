import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoPessoalComponent } from './departamento-pessoal.component';

describe('DepartamentoPessoalComponent', () => {
  let component: DepartamentoPessoalComponent;
  let fixture: ComponentFixture<DepartamentoPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoPessoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
