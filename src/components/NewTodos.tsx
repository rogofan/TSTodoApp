import React, { useRef } from "react";
import "../components/NewTodo.css";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const entertedText = textInputRef.current!.value;
    console.log(entertedText);
    props.onAddTodo(entertedText);
    if (textInputRef.current) {
      textInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label className="label" htmlFor="todo-text">
          Todo text
        </label>
        <input
          className="input"
          type="text"
          id="todo-text"
          ref={textInputRef}
        />
      </div>
      <button className="button" type="submit">
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
