import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MentorNotificationComponent } from './mentor-notification.component';

describe('MentorNotificationComponent', () => {
  let component: MentorNotificationComponent;
  let fixture: ComponentFixture<MentorNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
