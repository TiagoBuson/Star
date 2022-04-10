import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowImagensComponent } from './row-imagens.component';

describe('RowImagensComponent', () => {
  let component: RowImagensComponent;
  let fixture: ComponentFixture<RowImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowImagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
