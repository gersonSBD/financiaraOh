import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAbstractComponent } from './users-abstract.component';

describe('UsersAbstractComponent', () => {
  let component: UsersAbstractComponent;
  let fixture: ComponentFixture<UsersAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAbstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
