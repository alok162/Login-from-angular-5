


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import  { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let debugElement : DebugElement;
  let htmlElement : HTMLElement;
  
  beforeEach(async(()=> {
  TestBed.configureTestingModule({
  declarations : [LoginFormComponent]
  }).compileComponents();
  }));

beforeEach(()=> {
  fixture = TestBed.createComponent(LoginFormComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  debugElement = fixture.debugElement.query(By.css('h2'));
  htmlElement = debugElement.nativeElement;
});




});

