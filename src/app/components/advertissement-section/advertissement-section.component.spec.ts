import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertissementSectionComponent } from './advertissement-section.component';

describe('AdvertissementSectionComponent', () => {
  let component: AdvertissementSectionComponent;
  let fixture: ComponentFixture<AdvertissementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertissementSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertissementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
