import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundComponent } from './playground.component';

describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;
  let playgroundNativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('content should not be changed', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();

    playgroundNativeElement = fixture.nativeElement;

    expect(playgroundNativeElement.children.length).toEqual(1);
    expect(playgroundNativeElement.textContent).toEqual(
      'Your playground code goes here'
    );
  });
});
