import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDescriptionComponent } from './image-description.component';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ImageDescriptionComponent', () => {
  let component: ImageDescriptionComponent;
  let fixture: ComponentFixture<ImageDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('cuando se cree el componente debe mostrar el mensaje "image-description works!"', () => {
    const fixture = TestBed.createComponent(ImageDescriptionComponent);
    fixture.detectChanges();
    let image_description = fixture.debugElement.queryAll(By.css('p')).map(
      (debugElement:DebugElement) => debugElement.nativeElement.innerHTML
    )
    console.log("aux",image_description); 
    expect(image_description).toContain('image-description works!');
  });
});
