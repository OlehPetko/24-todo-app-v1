import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
      setTodos([...todos, text])
    }
    const deleteTodo = (index) => {
      setTodos(todos.filter((el,i) => i !== index))
    }
    return (
        <div className="App">
            <h1>To Do App</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default App;
