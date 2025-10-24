import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorsList } from './sailors-list';

describe('SailorsList', () => {
  let component: SailorsList;
  let fixture: ComponentFixture<SailorsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SailorsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailorsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
