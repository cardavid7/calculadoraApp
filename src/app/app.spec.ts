import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("should have the title 'CalculadoraApp'", () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance.title).toEqual('CalculadoraApp');
  });

  it('adds a sequence of digits to the result', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.addToResult('1');
    app.addToResult('2');
    expect(app.result).toEqual('12');
  });

  it('performs an addition', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.addToResult('2');
    app.operator('+');
    app.addToResult('3');
    app.calculate();
    expect(app.result).toEqual('5');
  });

  it('performs a division', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.addToResult('9');
    app.operator('/');
    app.addToResult('3');
    app.calculate();
    expect(app.result).toEqual('3');
  });

  it('clears everything with borradoTotal', () => {
    const app = TestBed.createComponent(App).componentInstance;
    app.addToResult('7');
    app.operator('+');
    app.borradoTotal();
    expect(app.result).toEqual('');
    expect(app.value).toEqual(0);
    expect(app.operador).toEqual('');
  });
});
