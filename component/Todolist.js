import html from '../js/core.js'
import {connect} from '../js/store.js'
import Todoitem from './Todoitem.js'

const connector = connect()

function Todolist({todos,filters}) {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox"
            onchange = "dispatch('toogleAll', this.checked)"
            ${todos.every(filters.completed) && 'checked'}
            >
            <label 
            for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.map((todo,index) => Todoitem({ todo,index }))}
            </ul>
        </section>
        `
}

export default connector(Todolist)