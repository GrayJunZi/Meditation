import { useState } from "react";
import "./sign-in.styles.scss";
import { db } from "../../utils/storageLocal";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormField = () => setFormFields(defaultFormField);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = db.createWithEmailAndPassword(email, password);
    if (response) {
      resetFormField();
    }
  };

  return (
    <div className="sign-in-container">
      <h2>已经有帐号了？</h2>
      <span>使用邮箱和密码登录</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button buttonType="inverted" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
