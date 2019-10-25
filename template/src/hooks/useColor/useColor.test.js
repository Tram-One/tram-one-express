import useColor from "./useColor"

describe('Color', () => {
	it('Should return a valid color', () => {
    const [color, _] = useColor()
		expect(color).toEqual('#e6ef9f')
	})
    
  it('Should incremented the color', () => {
    const [_, incrementColor] = useColor()
    incrementColor()
    const [color] = useColor()
    expect(color).toEqual('#a09fef')
  })
})
