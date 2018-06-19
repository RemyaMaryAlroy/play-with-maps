import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemapComponent } from './updatemap.component';

describe('UpdatemapComponent', () => {
  let component: UpdatemapComponent;
  let fixture: ComponentFixture<UpdatemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
