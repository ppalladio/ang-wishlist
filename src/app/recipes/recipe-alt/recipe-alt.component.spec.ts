import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAltComponent } from './recipe-alt.component';

describe('RecipeAltComponent', () => {
  let component: RecipeAltComponent;
  let fixture: ComponentFixture<RecipeAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeAltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
