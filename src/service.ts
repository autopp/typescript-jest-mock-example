export interface Calc {
  pow: (x: number, y: number) => number
  sqrt: (x: number) => number
}

export class Dist {
  private calc: Calc

  constructor(calc: Calc) {
    this.calc = calc
  }

  distance(p1: { x: number, y: number }, p2: { x: number, y: number }): number {
    return this.calc.sqrt(this.calc.pow(p1.x - p2.x, 2) + this.calc.pow(p1.x - p2.x, 2))
  }
}
