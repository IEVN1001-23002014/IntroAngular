import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Figuras } from './figuras';

describe('Figuras', () => {
  let component: Figuras;
  let fixture: ComponentFixture<Figuras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Figuras],
    }).compileComponents();

    fixture = TestBed.createComponent(Figuras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
