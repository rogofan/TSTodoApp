import React from "react";
import "../components/TodoList.css";
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className="ul">
      {props.items.map((todo) => (
        <li className="li" key={todo.id}>
          <span className="li">
            {todo.text}
            <button
              className="button"
              onClick={() => props.onDeleteTodo(todo.id)}
            >
              DELETE
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
