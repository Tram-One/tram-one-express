const colors = ['#e6ef9f', '#a09fef', '#9fefa1', '#ef9f9f']

module.exports = {
  init: () => colors[0],
  advance: (color) => {
    const nextColorIndex = colors.indexOf(color) + 1
    return colors[nextColorIndex % colors.length]
  }
}
