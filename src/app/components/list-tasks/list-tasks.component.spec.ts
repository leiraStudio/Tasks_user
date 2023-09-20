import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksComponent } from '@app/components';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListTasksComponent],
    });
    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
