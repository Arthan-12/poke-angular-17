import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySquadBoxComponent } from './my-squad-box.component';

describe('MySquadBoxComponent', () => {
  let component: MySquadBoxComponent;
  let fixture: ComponentFixture<MySquadBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySquadBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySquadBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
