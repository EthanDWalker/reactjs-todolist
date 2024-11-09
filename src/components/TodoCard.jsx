import React from "react";

export default function TodoCard(props) {
  const { children, deleteTodo, index, editTodo } = props;
  return (
    <div className="flex pb-1 px-1 justify-center">
      <li
        className="bg-[color:--second] rounded-md py-3 w-full flex justify-between px-2"
        key={"Hi"}
      >
        {children}
        <div>
          <button
            className="items-center"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
