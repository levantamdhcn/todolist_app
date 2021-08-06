export default function html([first,...strings], ...values) {
    return  values.reduce((acc,cur) => {
        return acc.concat(cur, strings.shift())
    }, [first])
    .filter(x => x && x != true || x === 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map() //Object đại diện cho nơi mà mã HTML sẽ được in ra

    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        } //Lặp qua roots và render mã HTML ra index
    }

        return {
            attach(component, root) {
                roots.set(root, component)
                render()
            }, //Thêm key root có giá trị component vào object roots
            connect (selector = state => state) {
                return component => (props, ...args) => 
                component(Object.assign({}, props,selector(state), ...args))
            },
            dispatch(action, ...args) {
                state = reducer(state, action, args)
                render()
            }
        }
}  