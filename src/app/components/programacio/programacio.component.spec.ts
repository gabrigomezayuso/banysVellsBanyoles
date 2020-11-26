import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacioComponent } from './programacio.component';

describe('ProgramacioComponent', () => {
  let component: ProgramacioComponent;
  let fixture: ComponentFixture<ProgramacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
