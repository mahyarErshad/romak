import React, { useState } from "react";
import Input from "../Utils/Input/Input";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const formData = [
    {
      label: "نام کاربری",
      setter: setUserName,
    },
    {
      label: "کلمه عبور",
      setter: setPassword,
      type: "password",
    },
  ];
  return (
    <form className="flex-col gap-4">
      {formData.map((item, index) => (
        <Input key={index} label={item.label} setter={item.setter} type={item.type} />
      ))}
    </form>
  );
}

export default Form;
