import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
    }).compileComponents();
  });


  beforeEach(() => {
     fixture = TestBed.createComponent(UsersComponent);
     component = fixture.componentInstance;
     de= fixture.debugElement;
     fixture.detectChanges();
  });

  it('should render the correct title', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('Hello Users!');
  
    component.title = 'Hey There!';
    fixture.detectChanges(); // Manually trigger change detection
  
    expect(h1.nativeElement.innerText).toBe('Hey There!');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
