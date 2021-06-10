import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactteamComponent } from './contactteam.component';

describe('ContactteamComponent', () => {
  let component: ContactteamComponent;
  let fixture: ComponentFixture<ContactteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
