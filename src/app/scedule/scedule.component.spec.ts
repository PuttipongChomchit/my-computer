import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceduleComponent } from './scedule.component';

describe('SceduleComponent', () => {
  let component: SceduleComponent;
  let fixture: ComponentFixture<SceduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
