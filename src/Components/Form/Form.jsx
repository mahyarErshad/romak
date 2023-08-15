import React, { useState } from "react";
import Input from "../Utils/Input/Input";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <form className="flex-col gap-4">
      {formData.map((item) => (
        <Input key={item.id} label={item.label} value={item.value} setter={item.setter} type={item.type} />
      ))}
    </form>
  );
}

export default Form;
