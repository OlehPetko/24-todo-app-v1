import {useState} from "react";
import styles from './TodoForm.module.css'

const TodoForm = ({addTodo}) => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    const [text, setText] = useState('')

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input placeholder='Enter new todo' value={text} onChange={e => setText(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}
export default TodoForm