import { Calc, Dist } from "../src/service"

function typedMock<F extends (...args: any) => any>() {
  return jest.fn<ReturnType<F>, Parameters<F>>()
}

describe("Dist.distance", () => {
  it("calculate euclidean distance", () => {
    const calc: Calc = {
      pow: jest.fn<number, [number, number]>().mockImplementation((x, y) => Math.pow(x, y)),
      sqrt: typedMock<Calc["sqrt"]>().mockImplementation((x) => Math.sqrt(x))
    }
    const dist = new Dist(calc)
  })
})
