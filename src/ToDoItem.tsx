import ToDo from "./ToDo";

export default function ToDoItem({ todo, toggleTodo, deleteTodo }: props) {
    return (
        <li key={todo.id}>
            <label htmlFor="todo">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
            </label>
            <button type="button" onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </li>
    );
}

interface props {
    todo: ToDo;
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}
