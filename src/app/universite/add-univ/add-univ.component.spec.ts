import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnivComponent } from './add-univ.component';

describe('AddUnivComponent', () => {
  let component: AddUnivComponent;
  let fixture: ComponentFixture<AddUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
