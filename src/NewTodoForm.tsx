import { FormEvent, useState } from "react";

export default function NewTodoForm({ onSubmit }: props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (newItem === "") return;

        onSubmit(newItem);

        setNewItem("");
    }

    return (
        <div>
            <h1 className="text-center font-bold">ToDo's</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

interface props {
    onSubmit: (title: string) => void;
}
