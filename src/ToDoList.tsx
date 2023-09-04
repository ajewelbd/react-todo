import ToDo from "./ToDo";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, toggleTodo, deleteTodo }: props) {
    return (
        <div className="todo-list">
            <ul>
                {todos.map((todo: ToDo) => {
                    return (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

interface props {
    todos: Array<ToDo>;
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}
