import React, { useState } from "react";

function Input({ label, type = "text", setter, value }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const border = error ? "border-red-400" : "border-blue-400 hover:border-blue-500 focus-within:border-blue-600";
  function handleBlur() {
    if (!value.trim().length) {
      setError(true);
      setErrorMessage(`${label} نمیتواند خالی باشد!`);
    } else {
      setError(false);
      setErrorMessage("");
    }
  }
  return (
    <div className="flex-col gap-2">
      <label className="cursor-pointer" htmlFor={label}>
        {label}:
      </label>
      <input onBlur={handleBlur} onChange={(e) => setter(e.target.value)} type={type} dir="ltr" className={`p-2 border-2 ${border} outline-none duration-200 rounded-md`} id={label} />
      {error && <p className="text-xs text-red-400">{errorMessage}</p>}
    </div>
  );
}

export default Input;
