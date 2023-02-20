import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSceduleComponent } from './data-scedule.component';

describe('DataSceduleComponent', () => {
  let component: DataSceduleComponent;
  let fixture: ComponentFixture<DataSceduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSceduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSceduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
