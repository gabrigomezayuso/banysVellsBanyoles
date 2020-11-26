import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornComponent } from './entorn.component';

describe('EntornComponent', () => {
  let component: EntornComponent;
  let fixture: ComponentFixture<EntornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
