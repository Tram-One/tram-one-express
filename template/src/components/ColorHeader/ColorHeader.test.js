import ColorHeader from './ColorHeader'

const mockColor = '#e6ef9f'
const mockUpdateColor = jest.fn()

// mock and spy on tram-one hooks
jest.mock('../../hooks/ColorHook', () => ({
	...(jest.requireActual('../../hooks/ColorHook')),
	useColor: () => [mockColor, mockUpdateColor]
}))

describe('ColorHeader', () => {
	it('should match snapshot', () => {
		const header = ColorHeader()
		expect(header.outerHTML).toMatchSnapshot()
	})

	it('should call mockSetColor on click', () => {
		const header = ColorHeader()
		header.click()
		expect(mockUpdateColor).toHaveBeenCalled()
	})
})
