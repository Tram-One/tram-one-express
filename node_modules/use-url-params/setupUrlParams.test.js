const setupUrlParams = require('./setupUrlParams')

describe('setupUrlParams', () => {
  describe('with mock getPath function', () => {
    it('should match with matching path from function', () => {
      const mockGetPath = () => '/fake-id/list'
      const useUrlParamsWithMock = setupUrlParams(mockGetPath)
      const params = useUrlParamsWithMock('/:account/list')
      expect(params).toEqual(
        expect.objectContaining({ account: 'fake-id' })
      )
    })

    it('should not match with non-matching path from function', () => {
      const mockGetPath = () => '/fake-id/list'
      const useUrlParamsWithMock = setupUrlParams(mockGetPath)
      const params = useUrlParamsWithMock('/:account/page')
      expect(params).toEqual({ matches: false })
    })

    it('should match with matching path with no variables from function', () => {
      const mockGetPath = () => '/list'
      const useUrlParamsWithMock = setupUrlParams(mockGetPath)
      const params = useUrlParamsWithMock('/list')
      expect(params).toEqual({ matches: true })
    })

    it('should return variables with no provided path', () => {
      const mockGetPath = () => '/list?id=3110'
      const useUrlParamsWithMock = setupUrlParams(mockGetPath)
      const params = useUrlParamsWithMock()
      expect(params).toEqual(
        expect.objectContaining({ id: '3110' })
      )
    })

    it('should not match with non-matching path with no variables from function', () => {
      const mockGetPath = () => '/list'
      const useUrlParamsWithMock = setupUrlParams(mockGetPath)
      const params = useUrlParamsWithMock('/page')
      expect(params).toEqual({ matches: false })
    })
  })
})
