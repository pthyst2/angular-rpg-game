import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLobbyComponent } from './layout-lobby.component';

describe('LayoutLobbyComponent', () => {
  let component: LayoutLobbyComponent;
  let fixture: ComponentFixture<LayoutLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
