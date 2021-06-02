import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDataComponent } from './chef-data.component';

describe('ChefDataComponent', () => {
  let component: ChefDataComponent;
  let fixture: ComponentFixture<ChefDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
