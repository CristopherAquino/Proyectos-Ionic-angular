import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SugeridosDetallePage } from './sugeridos-detalle.page';

describe('SugeridosDetallePage', () => {
  let component: SugeridosDetallePage;
  let fixture: ComponentFixture<SugeridosDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugeridosDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SugeridosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
