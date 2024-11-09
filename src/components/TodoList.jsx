import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, deleteTodo, editTodo } = props;

  return (
    <div className="flex justify-center">
      <ul className="grid sm:grid-cols-2 pt-2 w-full sm:w-3/4">
        {todos.map((todo, index) => {
          return <TodoCard key={index} deleteTodo={deleteTodo} editTodo={editTodo} index={index} {...props}>{todo}</TodoCard>;
        })}
      </ul>
    </div>
  );
}
