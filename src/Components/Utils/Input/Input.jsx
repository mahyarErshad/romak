import React from "react";

function Input({ label, type = "text" }) {
  return (
    <div className="flex-col gap-2">
      <label className="cursor-pointer" htmlFor={label}>
        {label} :
      </label>
      <input type={type} dir="ltr" className="p-2 border-2 border-blue-400 hover:border-blue-500 focus-within:border-blue-600 outline-none duration-200 rounded-md" id={label} />
    </div>
  );
}

export default Input;
