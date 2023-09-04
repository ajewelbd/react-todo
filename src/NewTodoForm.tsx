import { FormEvent, useState } from "react";

export default function NewTodoForm({ onSubmit }: props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
		if(newItem === "") return;
		

        onSubmit(newItem)

		setNewItem("")
    }

    return <div>
        <h1>ToDo's</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    </div>
}

interface props {
    onSubmit: (title: string) => void
}