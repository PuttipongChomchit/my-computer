import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNewProjectComponent } from './test-new-project.component';

describe('TestNewProjectComponent', () => {
  let component: TestNewProjectComponent;
  let fixture: ComponentFixture<TestNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
