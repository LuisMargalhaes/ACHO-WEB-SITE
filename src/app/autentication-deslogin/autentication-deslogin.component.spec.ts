import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticationDesloginComponent } from './autentication-deslogin.component';

describe('AutenticationDesloginComponent', () => {
  let component: AutenticationDesloginComponent;
  let fixture: ComponentFixture<AutenticationDesloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutenticationDesloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticationDesloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
