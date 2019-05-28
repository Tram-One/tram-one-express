import { registerHtml, start } from "tram-one"
import ColorHeader from "./components/ColorHeader"
import "./styles.css"

const html = registerHtml({
  ColorHeader
})

const home = () => {
  return html`
    <div>
      <ColorHeader />
      <body>
        Thank you for using Tram-One!
      </body>
    </div>
  `
}

start("#app", home)
