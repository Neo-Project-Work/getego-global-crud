import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TaskCardInfoComponent } from './task-card-info.component';

describe('TaskCardInfoComponent', () => {
  let component: TaskCardInfoComponent;
  let fixture: ComponentFixture<TaskCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[],
      imports: [ReactiveFormsModule, FormsModule,TaskCardInfoComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with required form controls', () => {
    const form = component.taskForm;
    expect(form.contains('title')).toBeTruthy();
    expect(form.contains('description')).toBeTruthy();
    expect(form.contains('createdBy')).toBeTruthy();
    expect(form.contains('assignedTo')).toBeTruthy();
  });

  it('should show error messages for invalid form controls', () => {
    const titleInput = fixture.debugElement.query(By.css('#title'));
    const descriptionTextarea = fixture.debugElement.query(By.css('#description'));
    const createdByInput = fixture.debugElement.query(By.css('#createdBy'));
    const assignedToInput = fixture.debugElement.query(By.css('#assignedTo'));

    // Trigger invalid form state
    titleInput.nativeElement.value = '';
    titleInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    descriptionTextarea.nativeElement.value = '';
    descriptionTextarea.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    createdByInput.nativeElement.value = '';
    createdByInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    assignedToInput.nativeElement.value = '';
    assignedToInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    

    // Check for error messages
    const titleErrorMessage = fixture.debugElement.query(By.css('#title-label'));
    expect(titleErrorMessage).toBeTruthy();

    const descriptionErrorMessage = fixture.debugElement.query(By.css('#description-label'));
    expect(descriptionErrorMessage).toBeTruthy();

    const createdByErrorMessage = fixture.debugElement.query(By.css('#createdBy-label'));
    expect(createdByErrorMessage).toBeTruthy();

    const assignedToErrorMessage = fixture.debugElement.query(By.css('#assignedTo-label'));
    expect(assignedToErrorMessage).toBeTruthy();
  });


  it('should call createTask() method when Submit button is clicked', () => {
    spyOn(component, 'createTask'); // Spy on the createTask method

    const submitButton = fixture.debugElement.query(By.css('#submit-button'));
    submitButton.nativeElement.click(); // Simulate a click on the Submit button
    fixture.detectChanges();

    expect(component.createTask).toHaveBeenCalled(); // Check if createTask method was called
  });

  it('should call update() method when Update button is clicked', () => {
    spyOn(component, 'update'); // Spy on the update method

    const updateButton = fixture.debugElement.query(By.css('#update-buttton'));
    updateButton.nativeElement.click(); // Simulate a click on the Update button
    fixture.detectChanges();

    expect(component.update).toHaveBeenCalled(); // Check if update method was called
  });

});
