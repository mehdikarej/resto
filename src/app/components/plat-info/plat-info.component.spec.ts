import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatInfoComponent } from './plat-info.component';

describe('PlatInfoComponent', () => {
  let component: PlatInfoComponent;
  let fixture: ComponentFixture<PlatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
