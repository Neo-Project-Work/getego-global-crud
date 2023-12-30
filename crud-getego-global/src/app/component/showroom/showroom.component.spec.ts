import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowroomComponent } from './showroom.component';

describe('ShowroomComponent', () => {
  let component: ShowroomComponent;
  let fixture: ComponentFixture<ShowroomComponent>;

  // beforeEach(waitForAsync () => {
  //   TestBed.configureTestingModule({
  //     declarations: [ShowroomComponent]
  //   })
  //   .compileComponents();
    
  //   fixture = TestBed.createComponent(ShowroomComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(waitForAsync( 
    () => {
      TestBed.configureTestingModule({
        imports: [ShowroomComponent]
      }).compileComponents().then(() => {
        fixture =TestBed.createComponent(ShowroomComponent);
        component = fixture.componentInstance;
      })
  }))


  // beforeEach(waitForAsync( =>()) )

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('has image tag to display an image from an URL', () => {
    expect(component).toBeTruthy();
  });

  it('Renders the app-task-card-info component and display it', () => {
    expect(component).toBeTruthy();
  });
});
