import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf1RootComponent } from './mf1-root.component';

describe('Mf1RootComponent', () => {
  let component: Mf1RootComponent;
  let fixture: ComponentFixture<Mf1RootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mf1RootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mf1RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
