import 'core-js/stable'
import 'regenerator-runtime/runtime'
import {registerHtml, start} from 'tram-one'
import ColorHeader from './components/ColorHeader'
import './styles.css'
import { useColor } from './hooks/ColorHook'

const html = registerHtml({
	ColorHeader
})

const home = () => {
  const [color, incrementColor] = useColor()
	return html`
    <div>
      <ColorHeader />
      Thank you for using Tram-One!
      <div
        style="color:${color}"
        onclick=${incrementColor}
      >
       The color is controlled by global state 
      </div>
    </div>
  `
}

start('#app', home)
