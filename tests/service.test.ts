import { Calc, Dist } from "../src/service"
import { mock, MockProxy } from "jest-mock-extended"

function typedMock<F extends (...args: any) => any>() {
  return jest.fn<ReturnType<F>, Parameters<F>>()
}


describe("Dist.distance", () => {
  it("manual typing", () => {
    const calc: Calc = {
      pow: jest.fn<number, [number, number]>().mockImplementation((x, y) => Math.pow(x, y)),
      sqrt: jest.fn<number, [number]>().mockImplementation((x) => Math.sqrt(x))
    }
    new Dist(calc)
  })

  it("using builtin type utility", () => {
    const calc: Calc = {
      pow: typedMock<Calc["pow"]>().mockImplementation((x, y) => Math.pow(x, y)),
      sqrt: typedMock<Calc["sqrt"]>().mockImplementation((x) => Math.sqrt(x))
    }
    new Dist(calc)

  })

  it("using jest-mock-extended", () => {
    const calc: MockProxy<Calc> = mock<Calc>()
    calc.pow.mockImplementation((x, y) => Math.pow(x, y))
    calc.sqrt.mockImplementation((x) => Math.sqrt(x))
    new Dist(calc)
  })
})
