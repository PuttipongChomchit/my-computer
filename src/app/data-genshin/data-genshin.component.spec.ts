import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGenshinComponent } from './data-genshin.component';

describe('DataGenshinComponent', () => {
  let component: DataGenshinComponent;
  let fixture: ComponentFixture<DataGenshinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGenshinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGenshinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
