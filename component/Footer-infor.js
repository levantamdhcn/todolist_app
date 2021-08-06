import html from '../js/core.js'
import {connect} from '../js/store.js'

const connector = connect()

function Footer_infor() {
    return html`
        <footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<p>Created by <a href="http://todomvc.com">you</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
    `
}

export default Footer_infor