export default function ListItem({ name, completed, id, toggleTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          type="checkbox"
          data-list-item-checkbox
        />
        <span data-list-item-text>{name}</span>
      </label>
      <button data-button-delete>Delete</button>
    </li>
  );
}
