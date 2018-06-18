const c = ['#e6ef9f', '#a09fef', '#9fefa1', '#ef9f9f']
const colors = c.concat(c)
module.exports = {
  init: () => colors[0],
  advance: (color) => colors[colors.indexOf(color) + 1]
}
