import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapruebaComponent } from './tablaprueba.component';

describe('TablapruebaComponent', () => {
  let component: TablapruebaComponent;
  let fixture: ComponentFixture<TablapruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablapruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
