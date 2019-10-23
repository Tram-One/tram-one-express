import {registerHtml} from 'tram-one'
import './ColorHeader.scss'
import { useColor } from '../../hooks/ColorHook'

const html = registerHtml()

export default () => {
  const [color, incrementColor] = useColor()

	return html`
    <h1
      class="color-header"
      style="color:${color}"
      onclick=${incrementColor}
    >
      %TITLE%
    </h1>
  `
}
