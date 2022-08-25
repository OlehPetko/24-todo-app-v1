import Todo from "./Todo";
import styles from './TodoList.module.css'

const TodoList = (props) => {
const {todos, deleteTodo} = props
  return (
      <div className={styles.todoListContainer}>
          {todos.length === 0 && <h2>To do list is empty</h2>}
        {todos.map((todo, i) => <Todo key={i} todo={todo} deleteTodo={deleteTodo} i={i}/>)}
      </div>
  )
}
export default TodoList