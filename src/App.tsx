import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import ToDoList from "./ToDoList";
import ToDo from "./ToDo";

export default function App() {
    const [todos, setTodos] = useState<ToDo[]>(() => {
        const savedTodos: string | null = localStorage.getItem("todos");
        return savedTodos == null ? [] : JSON.parse(savedTodos);
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title: string) {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    title,
                    completed: false,
                },
            ];
        });
    }

    function toggleTodo(id: string, completed: boolean) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo: ToDo) => {
                if (todo.id === id) todo.completed = completed;
                return todo;
            });
        });
    }

    function deleteTodo(todoId: string) {
        setTodos((currentTodos) =>
            currentTodos.filter(({ id }) => id !== todoId)
        );
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />
            <ToDoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </>
    );
}
