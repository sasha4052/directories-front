import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dirfilesComponent } from './dirfiles.component';

describe('TestComponent', () => {
  let component: dirfilesComponent;
  let fixture: ComponentFixture<dirfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dirfilesComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dirfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
