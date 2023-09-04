import { FormEvent, useState } from "react";

export default function App() {
	const [newItem, setNewItem] = useState("");
	const [todos, setTodos] = useState<Array<Todo>>([]);


	function addItem(e: FormEvent) {
		e.preventDefault();
		if(newItem === "") return;
		setTodos((currentTodos) => {
			return [...currentTodos, {
				id: crypto.randomUUID(),
				title: newItem,
				completed: false
			}]
		})

		setNewItem("")
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
			<div>
				<h1>ToDo's</h1>
				<form onSubmit={addItem}>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="title" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
					<button type="submit">Add</button>
				</form>
			</div>
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