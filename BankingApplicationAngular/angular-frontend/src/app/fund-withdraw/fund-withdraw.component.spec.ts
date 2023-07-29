import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundWithdrawComponent } from './fund-withdraw.component';

describe('FundWithdrawComponent', () => {
  let component: FundWithdrawComponent;
  let fixture: ComponentFixture<FundWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundWithdrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
