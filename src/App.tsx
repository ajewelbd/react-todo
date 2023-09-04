import { useState } from "react";
import NewTodoForm from "./NewTodoForm";

export default function App() {
	
	const [todos, setTodos] = useState<Array<Todo>>([]);


	function addTodo(title: string) {
		setTodos((currentTodos) => {
			return [...currentTodos, {
				id: crypto.randomUUID(),
				title,
				completed: false
			}]
		})
	}

	function toggleTodo(id: string, completed: boolean) {
		setTodos(currentTodos => {
			return currentTodos.map((todo: Todo) => {
				if(todo.id === id) todo.completed = completed;
				return todo;
			})
		})
	}

	function deleteTodo(todoId: string) {
		setTodos(currentTodos => currentTodos.filter(({id}) => id !== todoId))
	}

	return (
		<>
			<NewTodoForm onSubmit={addTodo}/>
			<div className="todo-list">
				<ul>
					{todos.map((todo: Todo) => {
						return (
							<li key={todo.id}>
								<label htmlFor="todo">
									<input type="checkbox" checked={todo.completed} onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
									{todo.title}
								</label>
								<button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	);
}

interface Todo {
	id: string;
	title: string;
	completed: boolean;
}