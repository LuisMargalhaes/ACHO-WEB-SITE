import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticationSchollComponent } from './autentication-scholl.component';

describe('AutenticationSchollComponent', () => {
  let component: AutenticationSchollComponent;
  let fixture: ComponentFixture<AutenticationSchollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutenticationSchollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticationSchollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
