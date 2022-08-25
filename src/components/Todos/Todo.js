import styles from './Todo.module.css'


const Todo = ({todo, deleteTodo, i}) => {

    return (
        <div className={styles.todo}>
            <div className={styles.todoText} onDoubleClick={() => deleteTodo(i)}>
                {todo}
            </div>
        </div>
    )
}
export default Todo