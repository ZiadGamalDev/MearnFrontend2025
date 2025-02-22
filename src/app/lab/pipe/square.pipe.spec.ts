import { SquarePipeForLab } from './square.pipe';

describe("1-square pipe (class only) testing:", () => {

  let squarePipe: SquarePipeForLab;

  beforeAll(() => {
    squarePipe = new SquarePipeForLab();
  });

  it("expect to return 25 when passing 5", () => {
    expect(squarePipe.transform(5)).toBe(25);
  });

  it("expect to return 36 when passing '6'", () => {
    expect(squarePipe.transform('6')).toBe(36);
  });

  it("expect to return 'Invalid input' when passing wrong parameter", () => {
    expect(squarePipe.transform('xyz')).toBe('Invalid input');
  });

});
