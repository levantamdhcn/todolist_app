import html from '../js/core.js'
import {connect} from '../js/store.js'

const connector = connect()

function Todoitem({ todo,index }) {
    return html`
        <li class="${todo.completed && 'completed'}">
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox" 
                ${todo.completed && 'checked'}
                onchange = "dispatch('toggle', ${index})"
                >
                <label>${todo.title}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${todo.title}">
        </li>
        `
}

export default Todoitem