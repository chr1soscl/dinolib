import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinotableComponent } from './dinotable.component';

describe('DinotableComponent', () => {
  let component: DinotableComponent;
  let fixture: ComponentFixture<DinotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinotableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
