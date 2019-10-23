import { useColor } from "."

// mock and spy on tram-one hooks
jest.mock('tram-one', () => ({
	...(jest.requireActual('tram-one')),
}))

describe('Color', () => {
	it('Should return a valid color', () => {
        const [color, _] = useColor()
		expect(color).toEqual('#e6ef9f')
	})

	it('Should call incrementColor', () => {
        const [_, incrementColor] = useColor()
        incrementColor()
    })
    
    it('Should have incremented the color', () => {
        const [color, _] = useColor()
		expect(color).toEqual('#a09fef')
    })
})
