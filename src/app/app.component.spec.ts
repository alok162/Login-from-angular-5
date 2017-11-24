

import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import  { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TestBed, async } from '@angular/core/testing';<% if (routing) { %>;
import { RouterTestingModule } from '@angular/router/testing';<% } %>;


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement : DebugElement;
  let htmlElement : HTMLElement;
  
  beforeEach(async(()=> {
  TestBed.configureTestingModule({
  declarations : [AppComponent]
  }).compileComponents();
  }));

beforeEach(()=> {
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  debugElement = fixture.debugElement.query(By.css('p'));
  htmlElement = debugElement.nativeElement;
});


it('should display the p tag title', () => {
  fixture.detectChanges();
  expect(htmlElement.textContent).toEqual('number:1');

})

});
