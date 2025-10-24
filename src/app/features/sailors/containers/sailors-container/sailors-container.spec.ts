import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorsContainer } from './sailors-container';

describe('SailorsContainer', () => {
  let component: SailorsContainer;
  let fixture: ComponentFixture<SailorsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailorsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
