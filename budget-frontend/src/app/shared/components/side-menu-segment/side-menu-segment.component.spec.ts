import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuSegmentComponent } from './side-menu-segment.component';

describe('SideMenuSegmentComponent', () => {
  let component: SideMenuSegmentComponent;
  let fixture: ComponentFixture<SideMenuSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
