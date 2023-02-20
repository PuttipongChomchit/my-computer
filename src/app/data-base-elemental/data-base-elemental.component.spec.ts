import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseElementalComponent } from './data-base-elemental.component';

describe('DataBaseElementalComponent', () => {
  let component: DataBaseElementalComponent;
  let fixture: ComponentFixture<DataBaseElementalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBaseElementalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBaseElementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
