import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamBoxComponent } from './my-team-box.component';

describe('MyTeamBoxComponent', () => {
  let component: MyTeamBoxComponent;
  let fixture: ComponentFixture<MyTeamBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
