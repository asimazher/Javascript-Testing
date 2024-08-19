import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../intro";

describe("fizzbuzz", ()=> {
    it("should return FizzBuzz when divisible by 3 and 5", ()=> {

        expect(fizzBuzz(15)).toBe("FizzBuzz")

    })

    it("should return Fizz when divisible by 3", ()=> {

        expect(fizzBuzz(3)).toBe("Fizz")
        
    })

    it("should return Buzz when divisible by 3", ()=> {

        expect(fizzBuzz(5)).toBe("Buzz")
        
    })

    it("should return arg asString when not divisible by 3 and 5", ()=> {

        expect(fizzBuzz(7)).toBe("7")
        
    })
})