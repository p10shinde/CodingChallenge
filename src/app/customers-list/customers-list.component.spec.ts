import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListComponent } from './customers-list.component';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "displayedColumns", default "distance", default "destination"', async () => {
    fixture = TestBed.createComponent(CustomersListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.displayedColumns).toEqual(['id', 'name', 'latitude', 'longitude']);
  });
});
