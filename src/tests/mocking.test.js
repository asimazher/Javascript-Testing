import { vi, it, expect, describe } from 'vitest'
import { getShippingQuote } from '../libs/shipping'
import { getShippingInfo } from '../mocking'
vi.mock("../libs/shipping")

describe('test suite', () => {
    it('test case1', () => {
       const sendText = vi.fn()
       sendText.mockReturnValue("ok")

       const res = sendText("message")

       expect(sendText).toHaveBeenCalledOnce()
       expect(sendText).toHaveBeenCalledWith("message")

    expect(sendText).toReturn("ok")

    })
})

describe('getShippingInfo', () => {
    it('should get shipping info. if a quote is returned', () => {
        vi.mocked(getShippingQuote).mockReturnValue({
            cost: 10,
            estimatedDays: 5
        })

        const shippingInfo = getShippingInfo("USA")

        expect(shippingInfo).toMatch(/cost/i)
        expect(shippingInfo).toMatch(/Days/i)
    })

    it('should return Unavailable if a quote is not returned', () => {
        vi.mocked(getShippingQuote).mockReturnValue({})
    })

    expect(getShippingInfo()).toMatch(/unavailable/i)
})