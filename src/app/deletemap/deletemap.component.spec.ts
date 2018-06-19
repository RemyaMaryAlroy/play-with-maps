import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemapComponent } from './deletemap.component';

describe('DeletemapComponent', () => {
  let component: DeletemapComponent;
  let fixture: ComponentFixture<DeletemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
