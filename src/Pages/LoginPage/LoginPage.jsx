import React from "react";
import Form from "../../Components/Form/Form";
import { ReactComponent as ReactLogo } from "../../assets/images/logo.svg";

function LoginPage() {
  return (
    <section className="w-full h-full p-8 grid max-md:grid-cols-1 grid-cols-2">
      <div className="flex-center max-md:border-l-0 border-l-2 border-gray-200">
        <ReactLogo />
      </div>
      <div className="flex-center">
        <Form />
      </div>
    </section>
  );
}

export default LoginPage;
