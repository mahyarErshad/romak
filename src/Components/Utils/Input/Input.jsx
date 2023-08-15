import React from "react";

function Input() {
  return (
    <div className="flex-col gap-2">
      <label htmlFor="input">ایمیل خود را وارد نمایید.</label>
      <input className="p-2 border-2 border-blue-400 hover:border-blue-500 focus-within:border-blue-600 outline-none duration-200 rounded-md" id="input" />
    </div>
  );
}

export default Input;
