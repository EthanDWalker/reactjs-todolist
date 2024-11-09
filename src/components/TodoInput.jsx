import React, { useState } from "react";

export default function TodoInput(props) {
  const { addTodo } = props;
  const [todo, setTodo] = useState('')
  return (
    <div className="flex justify-center">
      <div className="flex lg:w-1/3 w-full sm:w-1/2">
        <input
          className="bg-[color:--second] rounded-md w-full outline-none px-2 h-10"
          placeholder="Enter todo.."
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <div className="flex pl-1">
          <button className="bg-[color:--third] px-5 rounded-md w-full" onClick={() => {
            if (todo.trim() === "") return
            addTodo(todo)
          }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
