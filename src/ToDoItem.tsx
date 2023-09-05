import ToDo from "./ToDo";

export default function ToDoItem({ todo, toggleTodo, deleteTodo }: props) {
    return (
        <tr key={todo.id}>
            <td className="border border-slate-300 text-slate-500 p-2 text-center">
                <label
                    className="relative inline-flex items-center mb-4 cursor-pointer"
                    htmlFor={todo.id}
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                        className="sr-only peer"
                        id={todo.id}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
            </td>
            <td className="border border-slate-300 text-slate-500 p-2">
                {todo.title}
            </td>
            <td className="border border-slate-300 text-slate-500 text-center p-2">
                <button
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    className="rounded-full bg-red-500 text-white py-1 px-3"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

interface props {
    todo: ToDo;
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}
