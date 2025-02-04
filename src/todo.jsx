import { useState } from "react";

function Todo({ todos, remove, update }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todos?.sub);

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const saveEdit = () => {
        update(todos, editValue);
        setIsEditing(false);
    };

    return (
        <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden bg-white mx-4 mt-4 p-2 relative">
            {isEditing ? (
                <input
                    required
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                    className="pl-1 border rounded w-full outline-none hover:border-gray-300"
                />
            ) : (
                <h2 className="pl-1">{todos?.sub}</h2>
            )}

            {isEditing ? (
                <button className="absolute right-3" onClick={saveEdit}>
                    💾
                </button>
            ) : (
                <>
                    <button className="absolute right-1" onClick={() => remove(todos)}>🗑️</button>
                    <button className="absolute right-7" onClick={() => setIsEditing(true)}>✏️</button>
                </>
            )}
        </div>
    );
}

export default Todo;
