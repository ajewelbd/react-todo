import ToDo from "./ToDo";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, toggleTodo, deleteTodo }: props) {
    return (
        <div className="todo-list mt-8">
            {!todos.length && <p>No Todos available!</p>}
            <table className="border-collapse border border-slate-500">
                <thead className="bg-slate-50 dark:bg-slate-70">
                    <tr>
                        <th className="w-1/3 border border-slate-300 font-semibold p-4 text-slate-90 text-left">
                            Completed
                        </th>
                        <th className="w-1/3 border border-slate-300 font-semibold p-4 text-slate-90 text-left">
                            Title
                        </th>
                        <th className="w-1/3 border border-slate-300 font-semibold p-4 text-slate-90 text-left">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    );
}

interface props {
    todos: Array<ToDo>;
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}
