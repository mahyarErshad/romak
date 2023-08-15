import React, { useState } from "react";
import Input from "../Utils/Input/Input";
import { useNavigate } from "react-router-dom";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formData = [
    {
      id: 1,
      label: "نام کاربری",
      value: userName,
      setter: setUserName,
    },
    {
      id: 2,
      label: "کلمه عبور",
      value: password,
      setter: setPassword,
      type: "password",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userName.length || !password.length) {
      setError(true);
      setErrorMessage("فیلدها نباید خالی باشند!");
      return;
    }
    if (userName !== "kminchelle" || password !== "0lelplR") {
      setError(true);
      setErrorMessage("نام کاربری یا کلمه عبور اشتباه است!");
    } else {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: password,
          }),
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/products");
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex-col gap-4">
      {formData.map((item) => (
        <Input key={item.id} label={item.label} value={item.value} setter={item.setter} type={item.type} />
      ))}
      <button disabled={loading} className="bg-blue-600 text-white font-bold px-4 py-3 rounded-md hover:opacity-90 duration-300 mt-4 disabled:opacity-60">
        {loading ? "در حال ارسال..." : "ورود به حساب کاربری"}
      </button>
      <p className="text-sm text-blue-600 cursor-pointer">رمز عبورم را فراموش کردم!</p>
      {error && <p className="text-sm text-red-500">{errorMessage}</p>}
    </form>
  );
}

export default Form;
