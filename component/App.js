import html from '../js/core.js'
import {connect} from '../js/store.js'
import Header from './Header.js'
import Todolist from './Todolist.js'
import Footer from './Footer.js'
import Footer_infor from './Footer-infor.js'

const connector = connect()

function App({todos}) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && Todolist()}
            ${todos.length > 0 && Footer()}
        </section>
        ${Footer_infor()}
    `
}

export default connector(App)