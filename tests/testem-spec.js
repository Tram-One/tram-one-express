describe('tram-one', function() {
  it('should render 404 page', function() {
    const header = document.getElementsByTagName('h1')[0]
    expect(header.outerHTML).toBe('<h1>404</h1>')
  })
})
