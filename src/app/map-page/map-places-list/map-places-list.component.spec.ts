import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPlacesListComponent } from './map-places-list.component';

describe('MapPlacesListComponent', () => {
  let component: MapPlacesListComponent;
  let fixture: ComponentFixture<MapPlacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPlacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
