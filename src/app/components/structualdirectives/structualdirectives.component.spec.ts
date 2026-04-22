import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructualdirectivesComponent } from './structualdirectives.component';

describe('StructualdirectivesComponent', () => {
  let component: StructualdirectivesComponent;
  let fixture: ComponentFixture<StructualdirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructualdirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructualdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
