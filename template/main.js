const Tram = require('tram-one')
const html = Tram.html()

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.start('.main')
