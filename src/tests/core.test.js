import { describe, it, expect } from "vitest";
import { getCoupons, isPriceInRange, isValidUsername, validateUserInput } from "../core";

describe("getCoupons", ()=> {
    it("should return array of objects", () =>{
        const coupons = getCoupons();
        expect(coupons.length).toBeGreaterThan(0)
        expect(Array.isArray(coupons))
    })

    it("should return array of objects with valid coupon codes", () => {
        const coupons = getCoupons();

        coupons.forEach((coupon) => {
        expect(coupon).toHaveProperty("code")
        expect(typeof(coupon.code)).toBe("string")
        })

    })

    it("should return array of objects with valid discounts", () => {
        const coupons = getCoupons();

        coupons.forEach((coupon) => {
        expect(coupon).toHaveProperty("discount")
        expect(typeof(coupon.discount)).toBe("number")
        })

    })
})

describe('validateUserInput', () => {

    it('should validate successfuly if given valid input', () => {
        expect(validateUserInput("ali", 20)).toMatch(/success/i)
    })

    it('should handle non-string username', () => {
        expect(validateUserInput(900, 20)).toMatch(/Invalid/i)
    })

    it('should handle username length < 3', () => {
        expect(validateUserInput("jo", 20)).toMatch(/Invalid/i)
    })

    it('should handle non-number age', () => {
        expect(validateUserInput("50", 20)).toMatch(/Invalid/i)
    })

    it('should handle age < 18', () => {
        expect(validateUserInput("jon", 17)).toMatch(/Invalid/i)
    })
})

describe('isValidUsername', () => {
    it('should return false if username length is outside min(5) or max(15) length', () => {
        expect(isValidUsername("adam")).toBe(false)
        expect(isValidUsername("aasdfghjkjhgfdsrty")).toBe(false)
    })

    it('should return true if username length is at the min(5) or max(15) length', () => {
        expect(isValidUsername("ahmad")).toBe(true)
        expect(isValidUsername("aasdfghjkjhgfds")).toBe(true)
    })

    it('should return true if username length is inside the min(5) or max(15) length', () => {
        expect(isValidUsername("abdullah")).toBe(true)
    })
    
})

describe('isPriceInRange', () => {
    it.each([
        { price: -10, min: 0, max: 100, result:false },
        { price: 200, min: 0, max: 100, result:false },
        { price: 0, min: 0, max: 100, result:true },
        { price: 100, min: 0, max: 100, result:true },
        { price: 50, min: 0, max: 100, result:true }
    ])("should return $result for $price in range $min to $max", ({ price, min, max, result}) =>{

        expect(isPriceInRange(price, min, max)).toBe(result)
    }) 

})