import { Calc, Dist } from "../src/service"

describe("Dist.distance", () => {
  it("calculate euclidean distance", () => {
    const calc: Calc = {
      pow: jest.fn().mockImplementation((x, y) => Math.pow(x, y)),
      sqrt: jest.fn().mockImplementation((x) => Math.sqrt(x))
    }
    const dist = new Dist(calc)
    expect(dist)
  })
})
